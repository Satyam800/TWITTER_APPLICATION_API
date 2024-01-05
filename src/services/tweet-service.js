import { TweetRepository, HashRepository} from "../repository/index.js"
class TweetService {
  constructor() {
    this.TweetRepository = new TweetRepository();
    this.HashRepository = new HashRepository();
  }

  async create(data) {
    
   
    const content = data.content;
    
    const withtags = content.match(/(#[A-Za-z]*)/g); //this regex extract the hashtags
   
    const tags = withtags.map((tag) => tag.substring(1).toLowerCase())
   
    const tweet = this.TweetRepository.create(data);

    let alreadypresenttags =await this.HashRepository.findByName(tags);
  
    let titleofPresentTags = alreadypresenttags.map((tags) => tags.title);
    let newTags = titleofPresentTags.filter(
      (tag) => !titleofPresentTags.include(tag)
    );
    newTags = newTags.map((tag) => {
      return {
        title: tag,
        tweet: [tweet.id], // doubt in tweet.id
      };
    });

    const response = await this.HashRepository.bulkCreate(newTags);

    alreadypresenttags.forEach((tag) => {
      tag.tweet.push(tweet.id);
      tag.save();
    });
    return tweet;
  }
}

export default TweetService;
