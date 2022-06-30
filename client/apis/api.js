import request from 'superagent'

const rootUrl = '/api/v1'


export async function getItems() {
  try{
    const items = await request.get('api/v1/items')
    return items.body
  }
  catch(error){
    console.error(error.message)
  }
}

export async function getItemReviews(id) {
  try {
    const reviews = await request.get(`api/v1/reviews/${id}`)
    console.log("reviews", reviews.body)
    return reviews.body
  } catch (error) {
    console.error(error.message)
  }
}

export function getFruits() {
  return fruits
  return request.get(rootUrl + '/fruits').then((res) => {
    console.log('here', res.body.fruits)
    return res.body.fruits
  })
}


getItemReviews(1)





















// const fruits = [
//     'banana',
//     'apple',
//     'feijoa'
//   ]


// const items = [
//   {
//     id: 1,
//     name: 'Air Fryer',
//     contributerName: 'Tony',
//   },
//   {  
//     id: 2,
//     name: 'Air Fryer',
//     contributerName: 'Tony',
//   },
//   {    
//     id: 3,
//     name: 'Air Fryer',
//     contributerName: 'Tony',
//   },
// ]

// const reviews = [
//   {
//     id: 1,
//     itemId: 1,
//     reviewerName: 'Thomas',
//     review: 'Great item, I love it',
//     img: 'https://cdn.discordapp.com/attachments/991950516206702614/991955128213049405/IMG_1439.jpg',
//   },
//   {
//     id: 2,
//     itemId: 1,
//     reviewerName: 'Jane',
//     review: 'Soooo awesome',
//     img: 'https://cdn.discordapp.com/attachments/991950516206702614/991955128213049405/IMG_1439.jpg',
//   },
//   {
//     id: 3,
//     itemId: 1,
//     reviewerName: 'Jacqui',
//     review: 'Very cools',
//     img: 'https://cdn.discordapp.com/attachments/991950516206702614/991955128213049405/IMG_1439.jpg',
//   },
//   {
//     id: 4,
//     itemId: 1,
//     reviewerName: 'Sean',
//     review: 'Great item, I love it',
//     img: 'https://cdn.discordapp.com/attachments/991950516206702614/991955128213049405/IMG_1439.jpg',
//   },
// ]
