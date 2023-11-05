import { OnboardingData } from "../interfaces";

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Lottie1.json'),
    text: 'Welcome to onboarding screen!',
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce',
  },
  {
    id: 2,
    animation: require('../assets//animations/Lottie2.json'),
    text: 'Swipe to next!',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: require('../assets//animations/Lottie3.json'),
    text: "Let's go!",
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;
