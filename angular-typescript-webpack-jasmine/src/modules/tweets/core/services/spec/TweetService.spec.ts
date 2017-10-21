import {TweetService} from "../impl/TweetService";
import {Tweet} from "../../entities/Tweet";
import {forEach} from "lodash";
describe("Service: TweetService", () => {
    var tweetService: TweetService;
    beforeEach(() => {
        tweetService = new TweetService();
    });
    describe("on getAll()", () => {
        it("should return 5 tweets", () => {
            var res: Array<Tweet> = tweetService.getAll();
            expect(res.length).toBe(5);
            forEach(res, (tweet: Tweet) => {
                expect((<any>tweet.constructor).name).toEqual("Tweet");
            });
        });
    });
});
