import mongoose from 'mongoose';

const connectDB = async () => {
   
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
           useNewUrlParser: true, 
           useUnifiedTopology: true
        });
    
        console.log(`MONGO DB CONNECTED: ${conn.connection.host}`.bgGreen);
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);        
    }
   
    }

export default connectDB;