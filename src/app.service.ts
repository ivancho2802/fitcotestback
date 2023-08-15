import { Injectable } from '@nestjs/common';

export interface scheduleModelData {
  schedule: ScheduleModel[]
  speakers: SpeakersModel[]
}

export interface ScheduleModel {
  date: string
  groups: ScheGroups[]
}

interface ScheGroups {
  "time": string
  "sessions": GroupsSessions[]
}

interface GroupsSessions {
  "name": string
  "timeStart": string
  "timeEnd": string
  "location": string
  "tracks": string[]
  "id": string
  "description"?: string
  "speakerNames"?: string[]

}

interface SpeakersModel {
  "name": string
  "profilePic": string
  "instagram": string
  "twitter": string
  "about": string
  "title": string
  "location": string
  "email": string
  "phone": string
  "id": string
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSchedule(): scheduleModelData {
    return {
      "schedule": [
        {
          "date": "2047-05-17",
          "groups": [
            {
              "time": "8:00 am",
              "sessions": [
                {
                  "name": "Breakfast",
                  "timeStart": "8:00 am",
                  "timeEnd": "9:00 am",
                  "location": "Dining Hall",
                  "tracks": ["Food"],
                  "id": "1"
                }
              ]
            },
            {
              "time": "9:15 am",
              "sessions": [
                {
                  "name": "Getting Started with Ionic",
                  "location": "Hall 2",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Ted Turtle"],
                  "timeStart": "9:30 am",
                  "timeEnd": "9:45 am",
                  "tracks": ["Ionic"],
                  "id": "2"
                },
                {
                  "name": "Ionic Tooling",
                  "location": "Executive Ballroom",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Rachel Rabbit"],
                  "timeStart": "9:45 am",
                  "timeEnd": "10:00 am",
                  "tracks": ["Tooling"],
                  "id": "3"
                },
                {
                  "name": "University of Ionic",
                  "location": "Hall 3",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Ellie Elephant"],
                  "timeStart": "9:15 am",
                  "timeEnd": "9:30 am",
                  "tracks": ["Ionic"],
                  "id": "4"
                }
              ]
            },
            {
              "time": "10:00 am",
              "sessions": [
                {
                  "name": "Migrating to Ionic",
                  "location": "Hall 1",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Eva Eagle", "Lionel Lion"],
                  "timeStart": "10:00 am",
                  "timeEnd": "10:15 am",
                  "tracks": ["Ionic"],
                  "id": "5"
                },
                {
                  "name": "What's New in Angular",
                  "location": "Hall 3",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Rachel Rabbit"],
                  "timeStart": "10:15 am",
                  "timeEnd": "10:30 am",
                  "tracks": ["Angular"],
                  "id": "6"
                },
                {
                  "name": "The Evolution of Ionicons",
                  "location": "Hall 2",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Isabella Iguana", "Eva Eagle"],
                  "timeStart": "10:15 am",
                  "timeEnd": "10:30 am",
                  "tracks": ["Design"],
                  "id": "7"
                },
                {
                  "name": "Ionic Pro",
                  "location": "Grand Ballroom A",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Charlie Cheetah"],
                  "timeStart": "10:45 am",
                  "timeEnd": "11:00 am",
                  "tracks": ["Services"],
                  "id": "8"
                }
              ]
            },
            {
              "time": "11:00 am",
              "sessions": [
                {
                  "name": "Ionic Workshop",
                  "location": "Hall 1",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Karl Kitten", "Lionel Lion"],
                  "timeStart": "11:00 am",
                  "timeEnd": "11:45 am",
                  "tracks": ["Workshop"],
                  "id": "9"
                },
                {
                  "name": "Community Interaction",
                  "location": "Hall 3",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Lionel Lion", "Gino Giraffe"],
                  "timeStart": "11:30 am",
                  "timeEnd": "11:50 am",
                  "tracks": ["Communication"],
                  "id": "10"
                },
                {
                  "name": "Navigation in Ionic",
                  "location": "Grand Ballroom A",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Rachel Rabbit", "Eva Eagle"],
                  "timeStart": "11:30 am",
                  "timeEnd": "12:00 pm",
                  "tracks": ["Navigation"],
                  "id": "11"
                }
              ]
            },
            {
              "time": "12:00 pm",
              "sessions": [
                {
                  "name": "Lunch",
                  "location": "Dining Hall",
                  "description": "Come grab lunch with all the Ionic fanatics and talk all things Ionic",
                  "timeStart": "12:00 pm",
                  "timeEnd": "1:00 pm",
                  "tracks": ["Food"],
                  "id": "12"
                }
              ]
            },
            {
              "time": "1:00 pm",
              "sessions": [
                {
                  "name": "Ionic in the Enterprise",
                  "location": "Hall 1",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Paul Puppy"],
                  "timeStart": "1:00 pm",
                  "timeEnd": "1:15 pm",
                  "tracks": ["Communication"],
                  "id": "13"
                },
                {
                  "name": "Ionic Worldwide",
                  "location": "Hall 1",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Gino Giraffe"],
                  "timeStart": "1:15 pm",
                  "timeEnd": "1:30 pm",
                  "tracks": ["Communication"],
                  "id": "14"
                },
                {
                  "name": "The Ionic Package",
                  "location": "Grand Ballroom B",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Molly Mouse", "Burt Bear"],
                  "timeStart": "1:30 pm",
                  "timeEnd": "2:00 pm",
                  "tracks": ["Services"],
                  "id": "15"
                }
              ]
            },
            {
              "time": "2:00 pm",
              "sessions": [
                {
                  "name": "Push Notifications in Ionic",
                  "location": "Hall 2",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Burt Bear", "Charlie Cheetah"],
                  "timeStart": "2:00 pm",
                  "timeEnd": "2:30 pm",
                  "tracks": ["Services"],
                  "id": "16"
                },
                {
                  "name": "Ionic Documentation",
                  "location": "Grand Ballroom B",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Donald Duck"],
                  "timeStart": "2:30 pm",
                  "timeEnd": "2:45 pm",
                  "tracks": ["Documentation"],
                  "id": "17"
                },
                {
                  "name": "UX in Ionic",
                  "location": "Hall 3",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Isabella Iguana", "Ellie Elephant"],
                  "timeStart": "2:45 pm",
                  "timeEnd": "3:00 pm",
                  "tracks": ["Design"],
                  "id": "18"
                }
              ]
            },
            {
              "time": "3:00",
              "sessions": [
                {
                  "name": "Angular Directives in Ionic",
                  "location": "Hall 1",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Ted Turtle"],
                  "timeStart": "3:00 pm",
                  "timeEnd": "3:30 pm",
                  "tracks": ["Angular"],
                  "id": "19"
                },
                {
                  "name": "Mobile States",
                  "location": "Hall 2",
                  "description": "Mobile devices and browsers are now advanced enough that developers can build native-quality mobile apps using open web technologies like HTML5, Javascript, and CSS. In this talk, we’ll provide background on why and how we created Ionic, the design decisions made as we integrated Ionic with Angular, and the performance considerations for mobile platforms that our team had to overcome. We’ll also review new and upcoming Ionic features, and talk about the hidden powers and benefits of combining mobile app development and Angular.",
                  "speakerNames": ["Rachel Rabbit"],
                  "timeStart": "3:30 pm",
                  "timeEnd": "3:45 pm",
                  "tracks": ["Navigation"],
                  "id": "20"
                }
              ]
            }
          ]
        }
      ],
      "speakers": [
        {
          "name": "Burt Bear",
          "profilePic": "/assets/img/speakers/bear.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Burt is a Bear. Burt's interests include poetry, dashing space heroes, and lions.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "burt@example.com",
          "phone": "+1-541-754-3010",
          "id": "1"
        },
        {
          "name": "Charlie Cheetah",
          "profilePic": "/assets/img/speakers/cheetah.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Charlie is a Cheetah. Charlie's interests include country music, plush animals, pyrotechnics, and skeletons.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "charlie@example.com",
          "phone": "+1-541-754-3010",
          "id": "2"
        },
        {
          "name": "Donald Duck",
          "profilePic": "/assets/img/speakers/duck.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Donald is a Duck. Donald's interests include carpentry, superheroes, merpeople, and glam rock.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "donald@example.com",
          "phone": "+1-541-754-3010",
          "id": "3"
        },
        {
          "name": "Eva Eagle",
          "profilePic": "/assets/img/speakers/eagle.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Eva is an Eagle. Eva's interests include ants, seashells, and cupcakes.",
          "title": "Developer Advocate",
          "location": "Everywhere",
          "email": "eva@example.com",
          "phone": "+1-541-754-3010",
          "id": "4"
        },
        {
          "name": "Ellie Elephant",
          "profilePic": "/assets/img/speakers/elephant.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Ellie is an Elephant. Ellie's interests include pocket watches, pool, hand fans, and ninjas.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "ellie@example.com",
          "phone": "+1-541-754-3010",
          "id": "5"
        },
        {
          "name": "Gino Giraffe",
          "profilePic": "/assets/img/speakers/giraffe.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Gino is a Giraffe. Gino's interests include candy-making, unicorns, and birdhouses.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "gino@example.com",
          "phone": "+1-541-754-3010",
          "id": "6"
        },
        {
          "name": "Isabella Iguana",
          "profilePic": "/assets/img/speakers/iguana.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Isabella is an Iguana. Isabella's interests include crystals, architecture, and candle-making.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "isabella@example.com",
          "phone": "+1-541-754-3010",
          "id": "7"
        },
        {
          "name": "Karl Kitten",
          "profilePic": "/assets/img/speakers/kitten.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Karl is a Kitten. Karl's interests include skiing, jewelry, and needlepoint.",
          "title": "Developer Advocate",
          "location": "Everywhere",
          "email": "karl@example.com",
          "phone": "+1-541-754-3010",
          "id": "8"
        },
        {
          "name": "Lionel Lion",
          "profilePic": "/assets/img/speakers/lion.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Lionel is a Lion. Lionel's interests include lizards and mathematics.",
          "title": "Developer Advocate",
          "location": "Everywhere",
          "email": "lionel@example.com",
          "phone": "+1-541-754-3010",
          "id": "9"
        },
        {
          "name": "Molly Mouse",
          "profilePic": "/assets/img/speakers/mouse.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Molly is a Mouse. Molly's interests include werewolves and magic.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "molly@example.com",
          "phone": "+1-541-754-3010",
          "id": "10"
        },
        {
          "name": "Paul Puppy",
          "profilePic": "/assets/img/speakers/puppy.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Paul is a Puppy. Paul's interests include maps, whales, and dragons.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "paul@example.com",
          "phone": "+1-541-754-3010",
          "id": "11"
        },
        {
          "name": "Rachel Rabbit",
          "profilePic": "/assets/img/speakers/rabbit.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Rachel is a Rabbit. Rachel's interests include clowns, skeletons, and yo-yos.",
          "title": "Senior Software Engineer",
          "location": "Everywhere",
          "email": "rachel@example.com",
          "phone": "+1-541-754-3010",
          "id": "12"
        },
        {
          "name": "Ted Turtle",
          "profilePic": "/assets/img/speakers/turtle.jpg",
          "instagram": "ionicframework",
          "twitter": "ionicframework",
          "about": "Ted is a Turtle. Ted's interests include butterflies, skiing, and cupcakes.",
          "title": "Software Engineer",
          "location": "Everywhere",
          "email": "ted@example.com",
          "phone": "+1-541-754-3010",
          "id": "13"
        }
      ],
    }
  }

}
