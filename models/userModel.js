import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    surName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    otherName: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
    },
    residenceAddress: {
      type: String,
    },
    city: {
      type: String,
    },
    stateOfOrigin: {
      type: String,
    },
    localGovernment: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
    mobilePhoneNumber: {
      type: String,
    },
    homePhoneNumber: {
      type: String,
    },
    profession: {
      type: String,
    },
    employmentType: {
      type: String,
    },
    companyName: {
      type: String,
    },
    bankName: {
      type: String,
    },
    bankAccountNumber: {
      type: String,
    },
    bvnNumber: {
      type: String,
    },
    bankAccountType: {
      type: String,
    },
    sortCode: {
      type: String,
    },
    accountOpeningDate: {
      type: String,
    },
    nextOfKinName: {
      type: String,
    },
    relationNextOfKin: {
      type: String,
    },
    contactNextOfKin: {
      type: String,
    },
    phoneNumberNextOfKin: {
      type: String,
    },
    emailNextOfKin: {
      type: String,
    },
    chnNextOfKin: {
      type: String,
    },
    idForm: {
      type: String,
    },
    idNumber: {
      type: String,
    },
    idExpireDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
