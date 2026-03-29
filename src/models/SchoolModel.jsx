import { Schema, model, models } from "mongoose";

//school Schema
const schoolSchema = new Schema(
  {
    schoolname: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },

    classes: {
      type: String,
      required: true,
      enum: [
        "Primary 1",
        "Primary 2",
        "Primary 3",
        "Primary 4",
        "Primary 5",
        "Primary 6",
      ],
    },
    admissionYear: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
    },
    stateOfOrigin: {
      type: String,
      enum: [
        'Abia State',
        'Adamawa State',
        'Akwa Ibom State',
        'Anambra State',
        'Bauchi State',
        'Bayelsa State',
        'Benue State',
        'Borno State',
        'Cross River State',
        'Delta State',
        'Ebonyi State',
        'Edo State',
        'Ekiti State',
        'Enugu State',
        'FCT (Federal Capital Territory)',
        'Gombe State',
        'Imo State',
        'Jigawa State',
        'Kaduna State',
        'Kano State',
        'Katsina State',
        'Kebbi State',
        'Kogi State',
        'Kwara State',
        'Lagos State',
        'Nasarawa State',
        'Niger State',
        'Ogun State',
        'Ondo State',
        'Osun State',
        'Oyo State',
        'Plateau State',
        'Rivers State',
        'Sokoto State',
        'Taraba State',
        'Yobe State',
        'Zamfara State',
      ],
    },
    lga: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
      enum: ["Christian", "Muslim"],
    },
    sponsorName: {
      type: String,
      required: true,
    },
    sponsorAddress: {
      type: String,
      required: true,
    },
    sponsorContact: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },


  { timestamps: true }
);

//Admin Schema
const adminSchema = new Schema({
  schoolname: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


// Schoool Table
const KadsuBeb = models.KadsuBeb || model("KadsuBeb", schoolSchema);
export default KadsuBeb;

//Admin Table
export const AdminUser =
  models.AdminUser || model("AdminUser", adminSchema);



