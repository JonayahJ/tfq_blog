import InstagramOne from "../common/components/instagram/InstagramOne";
import BreadcrumbTwo from "../common/elements/breadcrumb/breadcrumbTwo";
import HeaderOne from "../common/elements/header/HeaderOne";
import { getAllPosts } from '../../lib/api';
import WidgetCategory from "../common/components/sidebar/WidgetCategory";
import WidgetSearch from "../common/components/sidebar/WidgetSearch";
import WidgetPostList from "../common/components/sidebar/WidgetPostList";
import WidgetSocialShare from "../common/components/sidebar/WidgetSocialShare";
import HeadTitle from "../common/elements/head/HeadTitle";
import FooterTwo from "../common/elements/footer/FooterTwo";

const TheLair = ({allPosts}) => {
    return (
        <>
        <HeadTitle pageTitle="The Lair" />
            <HeaderOne postData={allPosts} />
            <BreadcrumbTwo
                title="The Lair of the Fright Queen"
                bgImae="url('https://res.cloudinary.com/think-halcyon-llc/image/upload/v1620607988/The%20Fright%20Queen/TFQ_YT-Banner-2_fviwp4.png')"
            />
            <div className="axil-post-list-area axil-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-8">
                            {/* Start About Area  */}
                            <div className="axil-about-us">
                                <div className="inner">
                                    <h3>Welcome to The Lair of the Fright Queen!</h3>
                                    <p>Hi there ghouls and gals, and everything in between! I'm so excited you’ve decided to think about joining (or were curious about what the Lair is). If you're an avid horror fan or enthusiast, then this is the place for you. We do everything from discussing movies to comic books, testing cute little bots that I create in my spare time, playing tabletop games like Vampire: the Masquerade, screening movies together, and more!  If that sounds like something you're interested in, join our fledgling <a href="https://discord.gg/DYRQvCgQrp" target="_blank">Discord server</a> and come watch movies with us on <a href="https://scener.com/thefrightqueen" target="_blank">Scener</a>!</p>
                                    <p>Hope to see you there!</p>
                                </div>
                            </div>
                            {/* End About Area  */}
                        </div>
                        <div className="col-lg-4 col-xl-4 mt_md--40 mt_sm--40">
                            <div className="sidebar-inner">
                                <WidgetCategory catData={allPosts} />
                                <WidgetSearch />
                                <WidgetPostList postData={allPosts} />
                                <WidgetSocialShare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InstagramOne parentClass="bg-color-grey" />
            <FooterTwo />
        </>
    );
}

export default TheLair;

export async function getStaticProps() {
    const allPosts = getAllPosts([
      'id',
      'title',
      'featureImg',
      'featured',
      'date',
      'slug',
      'cate',
      'cate_img',
      'author_img',
      'author_name',
      'post_views',
    ])
  
    return {
      props: { allPosts }
    }
  }