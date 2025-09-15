const fakeJobs = [
  {
    id: 1,
    company: "Scoot",
    logo: "https://placehold.co/50x50/5964E0/FFFFFF?text=S",
    logoBackground: "#5964E0",
    position: "Senior Software Engineer",
    postedAt: "5h ago",
    contract: "Full Time",
    location: "United Kingdom",
    website: "https://scoot.com",
    apply: "https://scoot.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 2,
    company: "Vector",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=V",
    logoBackground: "#36B3D6",
    position: "Midlevel Back End Engineer",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Russia",
    website: "https://vector.com",
    apply: "https://vector.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 3,
    company: "Creative",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=C",
    logoBackground: "#36B3D6",
    position: "Desktop Support Manager",
    postedAt: "4d ago",
    contract: "Part Time",
    location: "Germany",
    website: "https://creative.com",
    apply: "https://creative.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 4,
    company: "Blogr",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=B",
    logoBackground: "#36B3D6",
    position: "Frontend Developer",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "United States",
    website: "https://blogr.com",
    apply: "https://blogr.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 5,
    company: "Type",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=T",
    logoBackground: "#36B3D6",
    position: "Junior Frontend Developer",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Canada",
    website: "https://type.com",
    apply: "https://type.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 6,
    company: "Verus",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=VE",
    logoBackground: "#36B3D6",
    position: "Senior UI Designer",
    postedAt: "2w ago",
    contract: "Part Time",
    location: "Japan",
    website: "https://verus.com",
    apply: "https://verus.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 7,
    company: "Kas",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=K",
    logoBackground: "#36B3D6",
    position: "UX/UI Designer",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "France",
    website: "https://kas.com",
    apply: "https://kas.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 8,
    company: "Dev",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=D",
    logoBackground: "#36B3D6",
    position: "Backend Developer",
    postedAt: "3w ago",
    contract: "Part Time",
    location: "Australia",
    website: "https://dev.com",
    apply: "https://dev.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 9,
    company: "Node",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=N",
    logoBackground: "#36B3D6",
    position: "Junior Node Developer",
    postedAt: "1m ago",
    contract: "Full Time",
    location: "India",
    website: "https://node.com",
    apply: "https://node.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 10,
    company: "Fiber",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=F",
    logoBackground: "#36B3D6",
    position: "Project Manager",
    postedAt: "1m ago",
    contract: "Part Time",
    location: "South Africa",
    website: "https://fiber.com",
    apply: "https://fiber.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 11,
    company: "Google",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=G",
    logoBackground: "#36B3D6",
    position: "Product Manager",
    postedAt: "1m ago",
    contract: "Full Time",
    location: "United States",
    website: "https://google.com",
    apply: "https://google.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 12,
    company: "Microsoft",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=M",
    logoBackground: "#36B3D6",
    position: "Data Scientist",
    postedAt: "2m ago",
    contract: "Full Time",
    location: "Ireland",
    website: "https://microsoft.com",
    apply: "https://microsoft.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 13,
    company: "Amazon",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=A",
    logoBackground: "#36B3D6",
    position: "DevOps Engineer",
    postedAt: "2m ago",
    contract: "Full Time",
    location: "United States",
    website: "https://amazon.com",
    apply: "https://amazon.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 14,
    company: "Apple",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=AP",
    logoBackground: "#36B3D6",
    position: "iOS Developer",
    postedAt: "3m ago",
    contract: "Full Time",
    location: "United States",
    website: "https://apple.com",
    apply: "https://apple.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
  {
    id: 15,
    company: "Netflix",
    logo: "https://placehold.co/50x50/36B3D6/FFFFFF?text=N",
    logoBackground: "#36B3D6",
    position: "Senior Video Engineer",
    postedAt: "3m ago",
    contract: "Full Time",
    location: "United States",
    website: "https://netflix.com",
    apply: "https://netflix.com/apply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
    requirements: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
    role: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae lectus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem et felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod du",
      items: [
        "Morbi interdum mollis sapien. Sed ac risus.",
        "Praesent elementum hendrerit tortor.",
        "Sed semper lorem et felis.",
      ],
    },
  },
];

export default fakeJobs;
