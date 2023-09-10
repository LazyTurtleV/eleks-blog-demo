class ApiMock {
  #dataSample = [
    {
      author: {
        name: 'Immam Farrhouk',
        picture: 'https://picsum.photos/seed/268/42',
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
        picture: 'https://picsum.photos/seed/269/42',
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
        picture: 'https://picsum.photos/seed/270/42',
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
        picture: 'https://picsum.photos/seed/271/42',
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
        picture: 'https://picsum.photos/seed/272/42',
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
        picture: 'https://picsum.photos/seed/273/42',
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
        picture: 'https://picsum.photos/seed/274/42',
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
        picture: 'https://picsum.photos/seed/274/42',
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
        picture: 'https://picsum.photos/seed/275/42',
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
        picture: 'https://picsum.photos/seed/276/42',
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
        picture: 'https://picsum.photos/seed/277/42',
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
        picture: 'https://picsum.photos/seed/278/42',
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

  #articleSample = {
    author: {
      name: 'Andy Gardner',
      picture: 'https://picsum.photos/seed/269/42',
    },
    date: '2 July 2020',
    img: 'https://eleks-demo-app-assets.s3.amazonaws.com/tiktok.png',
    header: 'How TikTok Is Rewriting the World',
    text: `In User Experience design, it’s easy to think of ‘users’ as a faceless group of humans. To combat that we use ‘personas’ as a shorthand to represent users, giving them a name (like Joan), a face, desires and dislikes. We make a ‘happy path’, a series of actions that solve Joan’s problem and hope that our users will know how to find the happy path.
    \n
    The thing is that users in user testing don’t behave how they would in the real world. They don’t even behave how they say they will. It isn’t even their fault; being observed, being questioned and being rewarded, alter their behaviour without their awareness.
    \n
    The UK Royal Mail used to employ cats, with an actual salary for their upkeep (and no, they weren’t like those cats with jobs in Japan that actually have miniature uniforms because goodness knows how they get those tiny hats on them). Tibs was such a well-loved working cat, he got his own obituary:
    `,
    likes: 47_000,
  };

  async _getObjUrl(fetchResult) {
    return fetchResult.blob().then((d) => URL.createObjectURL(d));
  }

  async init() {
    this.#dataSample = await Promise.all(
      this.#dataSample.map(async (i) => {
        const img = i.img
          ? await fetch(i.img).then((d) => this._getObjUrl(d))
          : 'https://eleks-demo-app-assets.s3.amazonaws.com/placeholder.jpg';
        return {
          ...i,
          img,
        };
      })
    );
    this.#articleSample.img = await fetch(this.#articleSample.img);
    this.#articleSample.author.picture = await fetch(
      this.#articleSample.author.picture
    );
  }

  async getArticles() {
    return this.init().then(() => this.#dataSample);
  }

  async getArticle(id) {
    this.#articleSample.img = await fetch(this.#articleSample.img).then((d) =>
      this._getObjUrl(d)
    );
    this.#articleSample.author.picture = await fetch(
      this.#articleSample.author.picture
    ).then((d) => this._getObjUrl(d));
    return this.#articleSample;
  }
}

export default new ApiMock();
