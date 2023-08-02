const data = {
  minutes: {
    id: 'minutes',
    type: 'range',
    name: 'минуты',
    unit: 'мин.',
    values: [100, 200, 300, 600],
  },
  sms: {
    id: 'sms',
    type: 'range',
    name: 'смс',
    unit: 'смс',
    values: [0, 50, 100, 15],
  },
  internet: {
    id: 'internet',
    type: 'range',
    name: 'интернет',
    unit: 'ГБ',
    values: [5, 10, 15, 25],
  },
  additionalServices: {
    id: 'wifirouter',
    type: 'checkbox',
    name: 'Wi-Fi роутер',
    unit: '',
    values: ['Аренда 99 ₽/мес.', 'Выкупить 2 600 ₽'],
  }
};

export default data
