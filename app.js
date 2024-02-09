const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const path = require("path");
const mongoose = require('mongoose')
const cors = require('cors')

// importing all models
const BadmintonModel = require('./models/BadmintonModel')
const TabletennisModel = require('./models/TableTennisModel')
const CricketModel = require('./models/CricketModel')
const FootballModel = require('./models/FootballModel')
const KabaddiModel = require('./models/KabaddiModel')
const VolleyballModel = require('./models/VolleyballModel')
const ChessModel = require('./models/ChessModel')
const CarromModel = require('./models/CarromModel')
const SatoliyaModel = require('./models/SatoliyaModel')
const KhoModel = require('./models/KhokhoModel')
const TowModel = require('./models/TOWModel')



const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    }
});


app.use(express.static(path.resolve("./public")));
app.use(express.json())
app.use(cors())

//socket server

function getModelInstance(modelName) {
    switch (modelName) {
        case 'BadmintonModel':
            return BadmintonModel;
        case 'TabletennisModel':
            return TabletennisModel;
        case 'FootballModel':
            return FootballModel;
        case 'VolleyballModel':
            return VolleyballModel;
        case 'KabaddiModel':
            return KabaddiModel;
        case 'CricketModel':
            return CricketModel;
        case 'ChessModel':
            return ChessModel;
        case 'CarromModel':
            return CarromModel;
        case 'SatoliyaModel':
            return SatoliyaModel;
        case 'KhokhoModel':
            return KhoModel;
        case 'TugofwarModel':
            return TowModel;
        default:
            throw new Error(`Invalid model name: ${modelName}`);
    }
}

io.on("connection", async (socket) => {
    console.log("A new User Connected..", socket.id);

    socket.on("score_change", async (data) => {
        console.log(data)
        const updateObject = {};
        if (data.model === "KabaddiModel" || data.model === "SatoliyaModel" || data.model === "FootballModel" || data.model === "KhokhoModel") {
            updateObject[`team1Rounds.${data.round - 1}`] = data.newt1;
            updateObject[`team2Rounds.${data.round - 1}`] = data.newt2;
            console.log("model instance",getModelInstance(data.model))
            //save to database
            await getModelInstance(data.model).findByIdAndUpdate(data.matchId, updateObject)
            //broadcast to all users
            io.emit("update_score", { matchId: data.matchId, newt1: data.newt1, newt2: data.newt2, round: data.round })
        }
        else {
            updateObject[`player1Sets.${data.set - 1}`] = data.newp1;
            updateObject[`player2Sets.${data.set - 1}`] = data.newp2;
            console.log(data.model)
            //save to database
            await getModelInstance(data.model).findByIdAndUpdate(data.matchId, updateObject)
            //broadcast to all users
            io.emit("update_score", { matchId: data.matchId, newp1: data.newp1, newp2: data.newp2, set: data.set })
        }
    })

    socket.on("winner_change", async (data) => {
        console.log(data)
        //db
        await getModelInstance(data.model).findByIdAndUpdate(data.matchId, { winner: data.wname })
        //broadcasting to all
        io.emit("winner_change", { matchId: data.matchId, wname: data.wname })
    })

});

//routes for sports
const badmintonRoutes = require('./routes/BadmintonRoutes')
const coordinatorRoutes = require('./routes/CoordinatorRoutes')
const tabletennisRoutes = require('./routes/TabletennisRoutes')
const volleyballRoutes = require('./routes/VolleyballRoutes')
const kabaddiRoutes = require('./routes/KabaddiRoutes')
const footballRoutes = require('./routes/FootballRoutes')
const cricketRoutes = require('./routes/CricketRoutes');
const chessRoutes = require('./routes/ChessRoutes')
const carromRoutes = require('./routes/CarromRoutes')
const satoliyaRoutes = require('./routes/SatoliyaRoutes')
const khoRoutes = require('./routes/KhokhoRoutes')
const towRoutes = require('./routes/TOWRoutes')
const fixtureRoutes = require('./routes/FixtureUploadRoutes')

// for get api of file upload
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.get('/api/file/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const filePath = path.join(__dirname, 'uploads', filename);

//     console.log('Requested file:', filename);
//     console.log('File path:', filePath);
  
//     // Check if the file exists
//     if (fs.existsSync(filePath)) {
//       // Send the file back to the client
//       res.sendFile(filePath);
//     } else {
//       // File not found
//       console.error('File not found:', filename);
//       res.status(404).json({ error: 'File not found' });
//     }
// });

app.use('/api/v1', badmintonRoutes)
app.use('/api/v1', coordinatorRoutes)
app.use('/api/v1', tabletennisRoutes)
app.use('/api/v1', volleyballRoutes)
app.use('/api/v1', kabaddiRoutes)
app.use('/api/v1', footballRoutes)
app.use('/api/v1', cricketRoutes)
app.use('/api/v1', satoliyaRoutes)
app.use('/api/v1', chessRoutes)
app.use('/api/v1', carromRoutes)
app.use('/api/v1', khoRoutes)
app.use('/api/v1',towRoutes)
app.use('/api/v1',fixtureRoutes)

// mongodb connection
DB_URL = "mongodb+srv://viralmodi228:fuPxzsYwVUAVltcw@sports.ukhjae6.mongodb.net/sports"
// DB_URL = "mongodb://127.0.0.1:27017/sports"
const db = mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

db.then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

const PORT = 3001
server.listen(PORT, () => {
    console.log("listening on port : ", PORT);
});


