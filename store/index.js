export const state = () => ({
  businesses: [
    {
      id: 1,
      logo: 'https://puu.sh/HwysA.png',
      preview_image: 'https://puu.sh/Hwyt5.png',
      title: 'Berger Bau SE',
      description:
        'Wir sind fit für die Herausforderungen von morgen und besitzen die Expertise für die Durchführung anspruchsvoller Baumaßnahmen und die Leidenschaft für die Entwicklung neuer intelligenter Lösungen, die Zukunftshorizonte eröffnen. Mit Blick auf morgen bauen und zuverlässig höchste Qualität von der Planung bis zur Fertigstellung bieten: Das war die Leitidee unseres Firmengründers Hans Berger im Jahr 1905. Aus dem Baugeschäft Hans Berger hat sich die BERGER GRUPPE entwickelt, ein familiengeführter, mittelständischer Unternehmensverbund der Bau- und Baustoffindustrie mit zahlreichen Niederlassungen, Tochter- und Beteiligungsgesellschaften im In- und Ausland und mit dem Hauptsitz in Passau. Heute sind wir eine feste Größe in der Bauindustrie.',
      tags: [
        'Beton- und Straßenbau',
        'Große Maschinen',
        'Teamarbeit',
        'International',
      ],
      is_liked: false,
    },
    {
      id: 4,
      logo: 'https://puu.sh/Hwywk.png',
      preview_image: 'https://puu.sh/HwyxN.png',
      title: 'StockImages and BusinessImages Company Co. und GmbH',
      description:
        'Zentrale Kompetenzfelder sind anspruchsvolles Bauen, Qualitätstransportbeton-Herstellung und -Anlieferung sowie Gewinnung und Aufbereitung hochwertiger Rohstoffe. Die Bündelung spezialisierter Geschäftseinheiten ermöglicht es auch, Projekte in Komplettleistung auszuführen. Das breite Leistungsspektrum und die hohe Wertschöpfungstiefe mit eigenen Beton- und Asphaltmischwerken, einem eigenen Fertigteilwerk, modernstem Fuhr- und Gerätepark sowie eigenen Roh- und Baustoffen und nicht zuletzt 2.900 fachkompetenten BERGER Mitarbeiter garantieren höchste Qualität und beste wirtschaftliche, kundenorientierte Lösungen aus einem Guss.',
      tags: ['Büroarbeiten', 'Anzug', 'Teamarbeit', 'International'],
      is_liked: true,
    },
    {
      id: 5,
      logo: 'https://puu.sh/Hwyzr.png',
      preview_image: 'https://puu.sh/HwyAl.png',
      title: 'Airplanes Company',
      description:
        'Auf den unternehmerischen Grundfesten der FLUGZEUG GRUPPE, den gelebten Werten eines traditionell erfolgreichen Familienunternehmens, wächst unser Erfolg stetig und nachhaltig.',
      tags: ['Flugzeuge fliegen', 'Aero', 'Teamarbeit', 'International'],
      is_liked: false,
    },
  ],
})

export const getters = {}

export const actions = {}

function truncate(ob, s, l) {
  if (s === 'tags') {
    if (l < ob[s][0].length) {
      return (ob[s][0] = ob[s][0].substring(0, l) + '...')
    } else {
      return ob
    }
  } else if (l <= ob[s].length) {
    return (ob[s] = ob[s].substring(0, l) + '...')
  } else {
    return ob
  }
}

export const mutations = {
  TruncatedBusinesses: (state) => {
    return state.businesses.forEach(function (business) {
      truncate(business, 'description', 180)
    })
  },

  TruncatedTitles: (state) => {
    return state.businesses.forEach(function (business) {
      truncate(business, 'title', 40)
    })
  },

  TruncatedTags: (state) => {
    return state.businesses.forEach(function (business) {
      truncate(business, 'tags', 11)
    })
  },
  LikeBusiness: (state, id) => {
    const obj = state.businesses.find((x) => x.id === id)
    obj.is_liked = !obj.is_liked
  },
}
