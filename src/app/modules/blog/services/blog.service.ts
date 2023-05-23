import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  // Credits to: Internet Society Org
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Encryption Keeps Kids Safe Online',
      description:
        'As parents and Internet advocates, we’re passionate about children’s safety online, and we do everything in our power to keep our kids safe. Just as we buckle them into seatbelts and make regular doctors visits, we keep tabs on what they’re doing online, using tools like encryption to protect them from danger.',
      author: 'Sebastián Schonfeld',
      comments: [
        'Great content. Keep it up!',
        'Good job!',
        'Thanks for that wonderful insight',
      ],
    },
    {
      id: 2,
      title: 'Another Successful NDSS Symposium',
      description:
        'Almost 500 leading academics, industry researchers, and security practitioners from around the world gathered in San Diego, California in February for the 30th edition of the Network and Distributed System Security Symposium (NDSS) to discuss the latest research and developments in Internet security research. A further 130 participants attended remotely.',
      author: 'Susannah Gray',
      comments: [
        'Great content. Keep it up!',
        'Good job!',
        'Thanks for that wonderful insight',
      ],
    },
    {
      id: 3,
      title: 'We Testified Because the Internet Needs a Voice',
      description:
        'Internet Society CEO and President, Andrew Sullivan, testified in front of the United States Senate Judiciary Committee’s Subcommittee on Privacy, Technology, and the Law in support of Section 230. During the “Platform Accountability: Gonzalez and Reform” hearing, Andrew explained why the protections that Section 230 gives people and service providers are critical. These protections maintain an open, globally connected, secure, and trustworthy Internet, and they support everyone who relies on this global resource for good. His most important message to the Subcommittee is that curtailing Section 230’s protections would directly threaten the ability of individuals to speak, debate, innovate, and be creative online. The ability of ordinary people to fully participate online is what makes the Internet unique and extraordinarily beneficial around the world.',
      author: 'Joseph Lorenzo Hall',
      comments: [
        'Great content. Keep it up!',
        'Good job!',
        'Thanks for that wonderful insight',
      ],
    },
    {
      id: 4,
      title: 'From Internet User to Internet Champion',
      description:
        'Both programs have empowered Internet leaders in diverse ways. While one acts on the global stage and the other at a local level, they both upskill the Internet user into an Internet champion, equipping them with in-demand, hands-on knowledge and skills in the technology sector.',
      author: 'Kamesh Shekar',
      comments: [
        'Great content. Keep it up!',
        'Good job!',
        'Thanks for that wonderful insight',
      ],
    },
    {
      id: 5,
      title:
        'Our Internet, Our Future: Our Plan to Protect the Internet for Today and Tomorrow',
      description:
        'They were innovators. Their goal was audacious. It was to provide a way for the many different kinds of networks being invented to talk to each other. These pioneers collaborated, building upon each other’s work, pushing the boundaries of what was possible. They opened up a new world of opportunity for the future of humanity.',
      author: 'Andrew Sullivan',
      comments: [
        'Great content. Keep it up!',
        'Good job!',
        'Thanks for that wonderful insight',
      ],
    },
  ];
  getBlogs = (): Blog[] => {
    return this.blogs;
  };
  constructor() {}
}
