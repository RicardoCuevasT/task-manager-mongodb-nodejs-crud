import { Schema, model } from "mongoose"; //Se importa el Schema y el model. El Schema es para crear el objeto en la bd

const taskSchema = new Schema({ 
  title: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true //Sirve para limpiar los espacios en caso de que existan antes y después del title
  },
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('Task', taskSchema)