class ApiMock {
  #dataSample = [
    {
      author: {
        name: 'Immam Farrhouk',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      header: 'The way to save yourself financially',
      text: `The solution to this problem is different for everybody. 
            How much money you invest in each asset class depends on your 
            financial situation and your age. 
            If you’re broke or have lots of credit card... `,
      likes: 47_000,
    },
    {
      author: {
        name: 'Andy Gardner',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/2/283/100',
      header: 'How TikTok Is Rewriting the World',
      text: `Hello, person who is, statistically speaking, 
      a human adult aged approximately “millennial” to “boomer.” 
      The analytics suggest a high 
      likelihood that you’re aware there 
      is an app named TikTok, and a simila...`,
      likes: 47_000,
    },
    {
      author: {
        name: 'Allan Hamilton',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/3/283/100',
      header: 'The hardest roles in tech',
      text: `To save companies some money, companies are saying 
      that designers need to have other hard skills, 
      like performing UX research. This is especially true if you’re on 
      a one-man team, in which you probably... `,
      likes: 47_000,
    },
    {
      author: {
        name: 'Allan Hamilton',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/4/283/100',
      header: 'Business Owners to Benefit from Listern Audio Platform',
      text: `TBusiness owners who play music all day long can benefit from 
      Listern’s unique rewards mechanism. A spa business usually plays 
      music to calm and create a relaxi...`,
      likes: 47_000,
    },
    {
      author: {
        name: 'Andy Gardner',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/5/283/100',
      header: 'How TikTok Is Rewriting the World',
      text: `Hello, person who is, statistically speaking, 
      a human adult aged approximately “millennial” to “boomer.” 
      The analytics suggest a high 
      likelihood that you’re aware there 
      is an app named TikTok, and a simila...`,
      likes: 47_000,
    },
    {
      author: {
        name: 'Allan Hamilton',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/6/283/100',
      header: 'The hardest roles in tech',
      text: `To save companies some money, companies are saying 
      that designers need to have other hard skills, 
      like performing UX research. This is especially true if you’re on 
      a one-man team, in which you probably... `,
      likes: 47_000,
    },
    {
      author: {
        name: 'Immam Farrhouk',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      header: 'The way to save yourself financially',
      text: `The solution to this problem is different for everybody. 
            How much money you invest in each asset class depends on your 
            financial situation and your age. 
            If you’re broke or have lots of credit card... `,
      likes: 47_000,
    },
    {
      author: {
        name: 'Andy Gardner',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/8/283/100',
      header: 'How TikTok Is Rewriting the World',
      text: `Hello, person who is, statistically speaking, 
      a human adult aged approximately “millennial” to “boomer.” 
      The analytics suggest a high 
      likelihood that you’re aware there 
      is an app named TikTok, and a simila...`,
      likes: 47_000,
    },
    {
      author: {
        name: 'Immam Farrhouk',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/9/283/100',
      header: 'The way to save yourself financially',
      text: `The solution to this problem is different for everybody. 
            How much money you invest in each asset class depends on your 
            financial situation and your age. 
            If you’re broke or have lots of credit card... `,
      likes: 47_000,
    },
    {
      author: {
        name: 'Immam Farrhouk',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/10/283/100',
      header: 'The way to save yourself financially',
      text: `The solution to this problem is different for everybody. 
            How much money you invest in each asset class depends on your 
            financial situation and your age. 
            If you’re broke or have lots of credit card... `,
      likes: 47_000,
    },
    {
      author: {
        name: 'Immam Farrhouk',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      header: 'The way to save yourself financially',
      text: `The solution to this problem is different for everybody. 
            How much money you invest in each asset class depends on your 
            financial situation and your age. 
            If you’re broke or have lots of credit card... `,
      likes: 47_000,
    },
    {
      author: {
        name: 'Immam Farrhouk',
        picture: 'https://picsum.photos/42',
      },
      date: '2 July 2020',
      img: 'https://picsum.photos/seed/12/283/100',
      header: 'The way to save yourself financially',
      text: `The solution to this problem is different for everybody. 
            How much money you invest in each asset class depends on your 
            financial situation and your age. 
            If you’re broke or have lots of credit card... `,
      likes: 47_000,
    },
  ];

  async init() {
    this.#dataSample = await Promise.all(
      this.#dataSample.map(async (i) => {
        const img = i.img
          ? await fetch(i.img)
              .then((r) => r.blob())
              .then((d) => URL.createObjectURL(d))
          : 'https://eleks-demo-app-assets.s3.amazonaws.com/placeholder.jpg';
        return {
          ...i,
          img,
        };
      })
    );
  }

  async getArticles() {
    return this.init().then(() => this.#dataSample);
  }
}

export default new ApiMock();
