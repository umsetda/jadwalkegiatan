let today = new Date()
let thisYear = today.getFullYear()
let thisMonth = today.getMonth()
let days = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
]
let months = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

for (i in months) {
  let option = document.createElement('option')
  option.value = i
  option.innerHTML = months[i]
  document.getElementById('selectMonth').appendChild(option)
}

for (let i = thisYear; i >= thisYear - 10; i--) {
  let option = document.createElement('option')
  option.value = i
  option.innerHTML = i
  document.getElementById('selectYear').appendChild(option)
}

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

getPlaceEvents = (year, month) => {
  document.getElementById('loader').classList.remove('hide')

  if (year == null || month == null) {
    year = thisYear
    month = thisMonth
  }

  let dateTime = new Date(year, month)
  let startDate = moment(dateTime).startOf('month').utc().format()
  let endDate = moment(startDate).add('1', 'months').utc().format()

  let events

  let todayForCompare = moment(new Date()).startOf('day').utc().format()

  opts =
    'start=' + startDate +
    '&end=' + endDate

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

          xhr('https://apiumum.herokuapp.com/events?' + opts)
            .then((genericEvents) => {
              events = placeEvents.concat(genericEvents)
              events.sort(function compare(a, b) {
                var dateA = new Date(a.dateTime)
                var dateB = new Date(b.dateTime)
                return dateA - dateB
              })
              console.log(events)


              let content = document.getElementById('content')
              while (content.firstChild) {
                content.removeChild(content.firstChild);
              }

              if (events.length == 0) {
                let content = document.getElementById('content')
                content.innerHTML =
                  'Tidak ada data...'
              }
              else {
                for (i in placeEvents) {
                  let card = document.createElement('div')
                  card.classList.add('card')
                  document.getElementById('content').appendChild(card)

                  let dateTime = document.createElement('div')
                  dateTime.classList.add('dateTime')
                  card.appendChild(dateTime)

                  let date = document.createElement('div')
                  date.classList.add('date')
                  let dateForCompare = moment(new Date(events[i].dateTime)).startOf('day').utc().format()
                  if (todayForCompare == dateForCompare) {
                    card.style.backgroundColor = '#e0fcfc'
                  }
                  date.innerHTML =
                    new Date(events[i].dateTime).getDate()
                  dateTime.appendChild(date)

                  let day = document.createElement('div')
                  day.classList.add('day')
                  day.innerHTML =
                    days[new Date(events[i].dateTime).getDay()]
                  dateTime.appendChild(day)

                  let time = document.createElement('div')
                  time.classList.add('time')
                  time.innerHTML =
                    ('0' + new Date(events[i].dateTime).getHours()).slice(-2) + ':' +
                    ('0' + new Date(events[i].dateTime).getMinutes()).slice(-2)
                  dateTime.appendChild(time)

                  let content = document.createElement('div')
                  content.classList.add('content')
                  card.appendChild(content)

                  let name = document.createElement('div')
                  name.classList.add('name')
                  name.innerHTML = events[i].description
                  content.appendChild(name)

                  let place = document.createElement('div')
                  place.classList.add('detail')
                  if (placesArr[events[i].place] == null) {
                    place.innerHTML =
                      '<i class="icon ion-android-pin"></i>' +
                      events[i].place
                  }
                  else {
                    place.innerHTML =
                      '<i class="icon ion-android-pin"></i>' +
                      placesArr[events[i].place]
                  }
                  content.appendChild(place)

                  if (events[i].pic) {
                    let user = document.createElement('div')
                    user.classList.add('detail')
                    user.innerHTML =
                      '<i class="icon ion-android-people"></i>' +
                      events[i].pic +
                      ' (' + (events[i].amount || '-') + ')'
                    content.appendChild(user)
                  }

                  if (events[i].notes) {
                    let notes = document.createElement('div')
                    notes.classList.add('detail')
                    notes.innerHTML =
                      '<i class="icon ion-clipboard"></i>' +
                      events[i].notes
                    content.appendChild(notes)
                  }
                }
              }
              document.getElementById('loader').classList.add('hide')
            })
            .catch((err) => {
              console.log(err)
              document.getElementById('loader').classList.add('hide')
            })
          // console.log(placeEvents)
        })
        .catch((err) => {
          console.log(err)
          document.getElementById('loader').classList.add('hide')
        })
    })
    .catch((err) => {
      console.log(err)
      document.getElementById('loader').classList.add('hide')
    })
}

searchButtonClick = () => {
  let year = document.getElementById('selectYear').value
  let month = document.getElementById('selectMonth').value

  // console.log(year + ' ' + month)
  getPlaceEvents(year, month)
}

// initial load
// getPlaceEventsFromToday()
getPlaceEvents()

// change value of selectYear and selectMonth to today
document.getElementById('selectYear').value = thisYear
document.getElementById('selectMonth').value = thisMonth