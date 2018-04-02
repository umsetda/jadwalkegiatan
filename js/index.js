let today = new Date()
let days = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
]
let months = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

// xhr function
xhr = (ep) => {
  const xmlhttprequest = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xmlhttprequest.open('GET', ep, true)
    xmlhttprequest.onload = () => {
      if (xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200) {
        resolve(JSON.parse(xmlhttprequest.responseText))
      }
      else {
        reject(JSON.parse(xmlhttprequest.responseText))
      }
    }
    xmlhttprequest.onerror = () => {
      reject(JSON.parse(xmlhttprequest.responseText))
    }
    xmlhttprequest.send()
  })
}

getPlaceEvents = (opts) => {
  xhr('https://apiumum.herokuapp.com/places')
    .then((places) => {
      let placesArr = []
      for (i in places) {
        let id = places[i]._id
        let name = places[i].name
        placesArr[id] = name
      }

      xhr('https://apiumum.herokuapp.com/places/events?' + opts)
        .then((placeEvents) => {
          for (i in placeEvents) {
            let card = document.createElement('div')
            card.classList.add('card')
            document.getElementById('content').appendChild(card)

            let dateTime = document.createElement('div')
            dateTime.classList.add('dateTime')
            card.appendChild(dateTime)

            let date = document.createElement('div')
            date.classList.add('date')
            date.innerHTML =
              new Date(placeEvents[i].dateTime).getDate()
            dateTime.appendChild(date)

            let day = document.createElement('div')
            day.classList.add('day')
            day.innerHTML =
              days[new Date(placeEvents[i].dateTime).getDay()]
            dateTime.appendChild(day)

            let time = document.createElement('div')
            time.classList.add('time')
            time.innerHTML =
              ('0' + new Date(placeEvents[i].dateTime).getHours()).slice(-2) + ':' +
              ('0' + new Date(placeEvents[i].dateTime).getMinutes()).slice(-2)
            dateTime.appendChild(time)

            let content = document.createElement('div')
            content.classList.add('content')
            card.appendChild(content)

            let name = document.createElement('div')
            name.classList.add('name')
            name.innerHTML = placeEvents[i].description
            content.appendChild(name)

            let place = document.createElement('div')
            place.classList.add('place')
            place.innerHTML =
              '<i class="icon ion-android-pin"></i>' +
              placesArr[placeEvents[i].place]
            content.appendChild(place)

            let user = document.createElement('div')
            user.classList.add('user')
            user.innerHTML =
              '<i class="icon ion-android-people"></i>' +
              placeEvents[i].pic +
              ' (' + (placeEvents[i].amount || '-') + ')'
            content.appendChild(user)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log(err)
    })
}

chooseCalendar = () => {
  let frame = document.createElement('div')

}

getPlaceEventsFromToday = () => {
  let startDate = moment().startOf('day').utc().format()
  let opts = 'start=' + startDate

  document.getElementById('titlebar').innerHTML =
    months[today.getMonth()] + ' ' + today.getFullYear()
  getPlaceEvents(opts)
}

// initial load
getPlaceEventsFromToday()