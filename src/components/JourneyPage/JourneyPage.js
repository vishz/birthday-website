import React from 'react';
import MemoryCard from '../MemoryCard/MemoryCard';
import './JourneyPage.css';

function JourneyPage() {
  const journey = [
    {
      title: 'November 2023',
      memories: [
        {
          title: 'First Outing 💕',
          desc: 'My broken leg kept us from the gym, so we went to Glow Mark instead. I was so shy 🥺, unsure of what was happening between us, but it felt so magical ✨. A moment I’ll cherish forever. ❤️',
          images: [
            '/assets/journey/november2.jpg',
            '/assets/journey/november1.jpg',
          ],
        },
          {
            title: 'First Blossom Days 💕',
            desc: 'The start of our journey, filled with shy smiles, stolen glances, and tender moments. A time when our hearts began to bloom together, creating memories to cherish forever. 💕✨',
            images: [
              '/assets/journey/november3.jpg',
              '/assets/journey/november4.jpg',
              '/assets/journey/november5.jpg',
              '/assets/journey/november6.jpg',
              '/assets/journey/november7.jpg',
              '/assets/journey/november8.jpg',
            ],
          },
          {
            title: 'Gym Days💕',
            desc: 'The days when sweat, laughter, and love mixed together. You were my strength, my cheerleader, and my favorite workout partner. Every rep felt easier with you by my side. 🏋️‍♀️💕',
            images: [
              '/assets/journey/november11.jpg',
              '/assets/journey/november12.jpg',
              '/assets/journey/november13.jpg',
            ],
          },
          {
            title: 'First Couple Hangout 💕',
            desc: 'We got drunk on laughter, walked the road hand in hand, and ended the night cooking together. A perfect mix of fun, love, and unforgettable moments. 🥂💫"',
            images: [
              '/assets/journey/november9.jpg',
              '/assets/journey/november10.jpg',
            ],
          },
      ],
    },
    
    {
        title: 'December 2023',
        memories: [
          {
            title: 'Couple Outings 💕',
            desc: 'From sharing meals to strolling through Christmas lights, shopping adventures, and simply enjoying time together—every moment with you feels like a little piece of happiness. Here’s to us and all the memories we keep creating. 🛍️✨💕',
            images: [
              '/assets/journey/December6.jpg',
             '/assets/journey/December7.jpg',
             '/assets/journey/December8.jpg',
             '/assets/journey/December9.jpg',
             '/assets/journey/December10.jpg',
            ],
          },
            {
              title: 'Graduation Day 💕',
              desc: 'Secretly sneaking in as the photograper to capture your big day was the best plan ever! Watching you shine with pride and joy made my heart so full ❤️✨',
              images: [
                '/assets/journey/December5.jpg',
              ],
            },
            {
              title: 'Last Day at Malabe Gym💕',
              desc: 'The place where our love story began. Saying goodbye was bittersweet, but we made sure to capture every moment with countless photos. This gym holds our laughter, sweat, and the memories of falling in love. ❤️📸',
              images: [
                '/assets/journey/December3.jpg',
                '/assets/journey/December4.jpg',
              ],
            },
            {
              title: 'Birthday Surprise💕',
              desc: 'Waking up to the most magical morning surprise at my boarding was everything I didn’t know I needed. Your love and thoughtfulness made my day unforgettable from the very start. 🥰🎂✨',
              images: [
                '/assets/journey/December1.jpg',
                '/assets/journey/Decemeber2.jpg',
              ],
            },
        ],
      },
      {
        title: 'Januray 2024',
        memories: [
          {
            title: 'Siripada Adventure 💕',
            desc: 'Climbing Siripada was a true challenge, but every step was worth it because we faced it together. Through every obstacle, you cared for me and proved that no matter what, we’ll always have each other’s back. A journey of love, strength, and unforgettable memories. 🌟👣❤️',
            images: [
              '/assets/journey/January5.jpg',
              '/assets/journey/January6.jpg',
              '/assets/journey/January7.jpg',
            ],
          },
            {
              title: 'Birthday Surprise 💕',
              desc: 'Early morning smiles, laughter, and the joy of surprising you on your special day. Watching your happiness was the best gift for me. Here’s to celebrating you and the love we share! 🥰✨❤️',
              images: [
                '/assets/journey/January1.jpg',
                '/assets/journey/January2.jpg',
                '/assets/journey/January3.jpg',
                '/assets/journey/January4.jpg',
              ],
            },
        ],
      },
      {
        title: 'February 2024',
        memories: [
          {
            title: 'Sweet Chocalate Surprise 💕',
            desc: 'On a day filled with anger, I showed up with chocolates and love to melt it all away. Sometimes, a little sweetness is all it takes to bring back the smiles and remind us of what truly matters. 🥰✨',
            images: [
              '/assets/journey/February2.jpg',
              '/assets/journey/February1.jpg',
            ],
          },
            {
              title: 'Roadside Photoshoot💕',
              desc: 'He clicked countless photos of me like a pro, then got adorably upset when I hadn’t taken any of him—like a little baby! 🥹 So, we made sure to get his too. Even while juggling office work, he cared for me every step of the way. Moments like these make my heart so full. 🥰✨',
              images: [
                '/assets/journey/February4.jpg',
                '/assets/journey/February3.jpg',
                '/assets/journey/February5.jpg',
              ],
            },
            
        ],
      },
      {
        title: 'March 2024',
        memories: [
          {
            title: 'Big Match Day 💕',
            desc: 'After the Ananda Nalanda Big Match, we celebrated with friends. The game was exciting, and the hangout was filled with laughter and great memories! 🥳✨',
            images: [
              '/assets/journey/March1.jpg',
            ],
          },
            {
              title: 'A Scary Moment 💕',
              desc: 'When he met with an accident and got a wound on his leg, I was so frightened. The extra care and everything we went through felt overwhelming, but we made it through together. Every moment of fear turned into gratitude for his strength and our bond. ❤️',
              images: [
                '/assets/journey/March2.jpg',
                '/assets/journey/March3.jpg',
              ],
            },
            {
              title: 'First Time Cooking💕',
              desc: 'He bought me a hot pot, and I cooked for him for the first time. It was a simple meal, but the love and effort made it so special. Here is to many more delicious moments together! 🥰',
              images: [
                '/assets/journey/March4.jpg',
                '/assets/journey/March5.jpg',
              ],
            },
        ],
      },
      {
        title: 'April 2024',
        memories: [
          {
            title: 'A Teddy Bear Surprise💕',
            desc: 'After a tiring day, a fight, and an exhausting Aurudu event, he surprised me with the sweetest teddy bear. It was his way of reminding me that even in tough moments, love always finds a way to make things better. 🥰✨',
            images: [
              '/assets/journey/April1.jpg',
            ],
          },
            {
              title: 'Weird Face Moment💕',
              desc: 'He loves capturing my weirdest faces, and honestly, I can not help but laugh every time. Those random goofy moments are some of the best memories we share. ❤️',
              images: [
                '/assets/journey/April2.jpg',
               
              ],
            },
            {
              title: 'Pagent Talent Round💕',
              desc: 'I participated in the talent round, and he was my biggest cheerleader. From helping me prepare my dance to watching every rehearsal and guiding me through it, his support gave me the strength to perform with confidence. ❤️',
              images: [
                '/assets/journey/April3.jpg',
                '/assets/journey/April4.jpg',
              ],
            },
        ],
      },
      {
        title: 'May 2024',
        memories: [
          {
            title: 'Crazy Night with Friends💕',
            desc: 'We got drunk, let loose, and did some wild, unforgettable things. Dancing, laughing, and making memories that will last forever. Crazy moments with the best people! 🥳✨',
            images: [
              '/assets/journey/May1.jpg',
            ],
          },
            {
              title: 'A Heartfelt Apology  💕',
              desc: 'After I got angry and decided to break up, he showed up with flowers and a statue, each with heartfelt quotes. His gesture reminded me of the love we share, and it melted my heart all over again. Sometimes, love speaks louder than words. 🥰✨',
              images: [
                '/assets/journey/May2.jpg',
                '/assets/journey/May4.jpg',
              ],
            },
            {
              title: 'Vesak Day Fun💕',
              desc: 'We went to watch Vesak with friends, rode roller coasters, and indulged in delicious food. Laughter, thrills, and good times—everything made this day unforgettable. ❤️🍴✨',
              images: [
                '/assets/journey/May5.jpg',
              ],
            },
        ],
      },
      {
        title: 'June 2024',
        memories: [
          {
            title: 'A Gift of Love 💕',
            desc: 'He gave me a photo frame with a heartfelt quote about how he’ll always be there to support me on this journey. From participating in all my shows to giving me this beautiful reminder, his love and dedication mean the world to me. ❤️✨',
            images: [
              '/assets/journey/June1.jpg',
              '/assets/journey/June2.jpg',
              '/assets/journey/June3.jpg',
            ],
          },
            {
              title: 'First Time Meeting with My Mom 💕',
              desc: 'The first time he met my mother, he acted like the most innocent, shy boy, yet treated her with so much warmth and respect, like she was his own. That moment made my heart swell with love for both of them. 🥰✨',
              images: [
                '/assets/journey/June4.jpg',
              ],
            },
            {
              title: 'Party & Games Fun💕',
              desc: 'We partied, played games, and had an absolute blast. Laughter, fun, and unforgettable moments filled the day. Here’s to the memories we’ll always cherish! 🥳✨',
              images: [
                '/assets/journey/June6.jpg',
                '/assets/journey/June5.jpg',
                '/assets/journey/november13.jpg',
              ],
            },
            {
              title: 'Seethawaka Adventure💕',
              desc: 'We explored Seethawaka, visited the botanical garden, and even took a refreshing bath in nature. The cool climate made everything feel so peaceful and perfect. A day full of relaxation and pure joy! 🌸✨',
              images: [
                '/assets/journey/June7.jpg',
              ],
            },
        ],
      },
      {
        title: 'July 2024',
        memories: [
          {
            title: 'Sinharaja Trip 💕',
            desc: 'We ventured into the heart of nature with a trip to Sinharaja. Surrounded by lush greenery and breathtaking landscapes, every step felt like an adventure. A journey of peace, beauty, and unforgettable memories. 💚✨',
            images: [
              '/assets/journey/July1.jpg',
              '/assets/journey/July2.jpg',
            ],
          },
            {
              title: 'Kabaragala Rock Hike 💕',
              desc: 'We tackled the Kabaragala Rock hike with friends, climbing to new heights and soaking in the stunning views. The challenge was worth every step, and the memories we made along the way are unforgettable! 💪✨',
              images: [
                '/assets/journey/July3.jpg',
                '/assets/journey/July4.jpg',
              ],
            },
        ],
      },
      {
        title: 'August 2024',
        memories: [
          {
            title: 'First Hair Color Adventure 💕',
            desc: 'For the first time, I colored my hair, and he was by my side the entire 6 hours! From helping me choose the perfect color to patiently waiting till it was done, his support made it even more special. ❤️✨',
            images: [
              '/assets/journey/August1.jpg',
            ],
          },
            {
              title: 'A Fun Night Out 💕',
              desc: 'A night filled with partying, dancing, and clubbing with friends! Laughter, music, and endless fun made it a night to remember. 🥳✨',
              images: [
                '/assets/journey/August2.jpg',
                '/assets/journey/August3.jpg',
              ],
            },
        ],
      },
      {
        title: 'September 2024',
        memories: [
          {
            title: 'Day at Galle Fort 💕',
            desc: 'He came to Galle Fort, so close to me, and we spent the entire day together. Exploring, laughing, and making memories in such a beautiful place—it was a day I’ll always cherish. ❤️✨',
            images: [
              '/assets/journey/September1.jpg',
              '/assets/journey/September2.jpg',
            ],
          },
            {
              title: 'Camping at Sabaragamuwa 💕',
              desc: 'We ventured to Sabaragamuwa for an unforgettable camping experience. Under the starry sky, surrounded by nature, we shared stories, laughter, and peaceful moments. A perfect escape together! ❤️✨',
              images: [
                '/assets/journey/September3.jpg',
                '/assets/journey/September4.jpg',
                '/assets/journey/September5.jpg',
              ],
            },
        ],
      },
      {
        title: 'October 2024',
        memories: [
          {
            title: 'Revisiting Our Gym 💕',
            desc: 'We visited our old gym to relive cherished memories. Being there brought back so many special moments and the start of something beautiful. 🥰✨',
            images: [
              '/assets/journey/October1.jpg',
            ],
          },
            {
              title: 'DJ Vibes with Friends 💕',
              desc: 'We practiced DJing with friends, mixing beats, laughing, and creating unforgettable moments. Music, fun, and great company—what more could we ask for? ❤️✨',
              images: [
                '/assets/journey/October2.jpg',
              ],
            },
        ],
      },
      {
        title: 'November 2024',
        memories: [
          {
            title: 'Moms Birthday Surprise  💕',
            desc: 'We planned a beautiful surprise for Mom’s birthday, and he was my biggest helper. From the details to the flowers he brought just for me, his thoughtfulness made the day even more special. ❤️✨',
            images: [
              '/assets/journey/november2-1.jpg',
              '/assets/journey/november2-2.jpg',
            ],
          },
            {
              title: 'Event Vibes with Friends 💕',
              desc: 'We hit the event with friends and danced the night away. Laughter, music, and unforgettable moments made it a night to remember! 🥳✨',
              images: [
                '/assets/journey/november2-3.jpg',
                '/assets/journey/november2-4.jpg',
              ],
            },
        ],
      },
      {
        title: 'December 2024',
        memories: [
          {
            title: 'Beach Day with Friends 💕',
            desc: 'We spent the day at the beach with friends, enjoying the waves, soaking up the sun, and having so much fun. It was the perfect escape to relax and make lasting memories! 🏖️✨',
            images: [
              '/assets/journey/December2-1.jpg',
              '/assets/journey/December2-2.jpg',
              '/assets/journey/December2-3.jpg',
              '/assets/journey/December2-4.jpg',
            ],
          },
            {
              title: 'Weligama Trip with Friends 💕',
              desc: 'We took a trip to Weligama, surfed the waves, chilled by the pool, and had the best time with friends. It was a perfect day full of adventure and laughter! 🏖️✨',
              images: [
                '/assets/journey/December2-5.jpg',
                '/assets/journey/December2-6.jpg',
                '/assets/journey/December2-7.jpg',,
              ],
            },
            {
              title: 'Birthday Surprise 💕',
              desc: 'He secretly planned the most amazing birthday surprise for me by getting my friends involved. The love and effort he put into making it special made it an unforgettable day! 🥰✨',
              images: [
                '/assets/journey/December2-8.jpg',
                '/assets/journey/December2-9.jpg',
              ],
            },
        ],
      },
                              
  ];

  return (
    <div className="journey-page">
      <h1>Our Journey</h1>
      {journey.map((month, index) => (
        <div key={index} className="month-section">
          <h2>{month.title}</h2>
          <div className="memory-cards">
            {month.memories.map((memory, idx) => (
              <MemoryCard
                key={idx}
                title={memory.title}
                desc={memory.desc}
                images={memory.images}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default JourneyPage;
