// Mock data keeps the MVP simple until Supabase auth and database tables are added.
export const emptyAuthForm = {
  name: '',
  email: '',
  password: '',
}

export const initialMockUser = {
  id: 4,
  name: 'You',
  email: 'you@example.com',
  paymentStatus: 'Unpaid',
}

export const initialRun = {
  id: 1,
  title: "Tonight's Run",
  time: '7:00 PM - 9:00 PM',
  location: 'Local Gym',
  price: 10,
  maxSpots: 10,
  players: [
    { id: 1, name: 'Marcus Johnson', paymentStatus: 'Paid' },
    { id: 2, name: 'Chris Lee', paymentStatus: 'Unpaid' },
    { id: 3, name: 'Andre Wilson', paymentStatus: 'Paid' },
    { id: 5, name: 'Jay Carter', paymentStatus: 'Unpaid' },
    { id: 6, name: 'Malik Green', paymentStatus: 'Paid' },
    { id: 7, name: 'Darius Smith', paymentStatus: 'Unpaid' },
    { id: 8, name: 'Tony Brooks', paymentStatus: 'Paid' },
    { id: 9, name: 'Noah Davis', paymentStatus: 'Unpaid' },
  ],
}
