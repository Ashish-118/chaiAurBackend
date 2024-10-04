require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000



const github={
  "login": "Ashish-118",
  "id": 145345766,
  "node_id": "U_kgDOCKnM5g",
  "avatar_url": "https://avatars.githubusercontent.com/u/145345766?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ashish-118",
  "html_url": "https://github.com/Ashish-118",
  "followers_url": "https://api.github.com/users/Ashish-118/followers",
  "following_url": "https://api.github.com/users/Ashish-118/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ashish-118/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ashish-118/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ashish-118/subscriptions",
  "organizations_url": "https://api.github.com/users/Ashish-118/orgs",
  "repos_url": "https://api.github.com/users/Ashish-118/repos",
  "events_url": "https://api.github.com/users/Ashish-118/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ashish-118/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ashish",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "currently studying in pec, Chandigarh",
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-09-18T11:10:59Z",
  "updated_at": "2024-09-25T16:06:54Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req, res) => {
    res.send('Hello Twitter!')
})

app.get('/login',(req, res) => {
    res.send('<h1>Please Login user!</h1>')
})
app.get('/github',(req, res) => {
    res.json(github)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


