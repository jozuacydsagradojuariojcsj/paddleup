**Steps to put repo to local machine**

After cloning to local machine make sure that you are in the right directory or folder. <br />
```
cd "paddledown"
cd "paddleup back"
npm i
```
on both directory. In changing directories, make sure of the "" for both paddleup front and back, as there is a space on the folder names<br />

Frontend start: <br />
```
npm start
```
Backend Start: <br />
```
npm run devStart
```

Another thing, since each machine has different IP addresses make sure that the url for the backend is the machine's IP address. For example: <br />
I ran the code for starting both backend and frontend <br />
```
npm run start
npm run devStart
```
and the machine IP Address showed 192.168.1.17, so the url in the frontend should also show my IP Address, if you are debugging in phone, and make sure of the port number
```
const client = axios.create({
  baseURL: "http://192.168.1.17:3000",
});
```
