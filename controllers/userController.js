import User from '../models/User';
import axios from 'axios';

const createAccount = async (req, res) => {
  try {
    const identitycard = req.files['identitycard'][0].path;
    const passport = req.files['passport'][0].path;
    const signature = req.files['signature'][0].path;
    const utilitybill = req.files['utilitybill'][0].path;
    const bankstatement = req.files['bankstatement'][0].path;

    const data = await User.create(req.body);

    const {
      title,
      surName,
      firstName,
      otherName,
      dateOfBirth,
      gender,
      residenceAddress,
      city,
      stateOfOrigin,
      localGovernment,
      emailAddress,
      mobilePhoneNumber,
      homePhoneNumber,
      profession,
      employmentType,
      companyName,
      bankName,
      bankAccountNumber,
      bvnNumber,
      sortCode,
      accountOpeningDate,
      bankAccountType,
      nextOfKinName,
      chnNextOfKin,
      relationNextOfKin,
      contactNextOfKin,
      phoneNumberNextOfKin,
      emailNextOfKin,
      idForm,
      idNumber,
      idExpireDate,
    } = data;

    const body = {
      sheet1: {
        title,
        surName,
        firstName,
        otherName,
        dateOfBirth,
        gender,
        residenceAddress,
        city,
        stateOfOrigin,
        localGovernment,
        emailAddress,
        mobilePhoneNumber,
        homePhoneNumber,
        profession,
        employmentType,
        companyName,
        bankName,
        bankAccountNumber,
        bvnNumber,
        sortCode,
        accountOpeningDate,
        bankAccountType,
        nextOfKinName,
        chnNextOfKin,
        relationNextOfKin,
        contactNextOfKin,
        phoneNumberNextOfKin,
        emailNextOfKin,
        idForm,
        idNumber,
        idExpireDate,
        passport,
        signature,
        utilitybill,
        bankstatement,
        identitycard,
      },
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.post(
      'https://api.sheety.co/4ae3e54ffabbc7f764b475b50f938e82/skyviewcapital/sheet1',
      body,
      config
    );

    res.status(201).json({ status: 'success' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 'error', message: 'server error' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('surName firstName otherName -_id');
    res.status(200).json({ status: 'success', count: users.length, users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 'error', message: 'server error' });
  }
};

export default {
  createAccount,
  getUsers,
};
