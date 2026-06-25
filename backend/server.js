const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');      // cors: Cross Origin Resource Sharing

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ticketDB').then(() => console.log("MongoDB Connected..!")).catch(err => console.log(err));
// then as IF condition and catch as ELSE condition

const ticketroute = require('./Routes/TicketRoutes');
app.use('/api/tickets', ticketroute);

app.listen(5000, () => console.log("Server is running on port 5000"));
