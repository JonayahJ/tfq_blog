import InstagramOne from '../common/components/instagram/InstagramOne';
import HeadTitle from '../common/elements/head/HeadTitle';
import HeaderOne from '../common/elements/header/HeaderOne';
import { getAllPosts } from '../../lib/api';
import PostSectionOne from '../common/components/post/PostSectionOne';
import PostSectionTwo from '../common/components/post/PostSectionTwo';
import PostSectionThree from '../common/components/post/PostSectionThree';
import CategoryList from '../common/components/category/CategoryList';
import PostSectionFour from '../common/components/post/PostSectionFour';
import SocialOne from '../common/components/social/SocialOne';
import PostSectionFive from '../common/components/post/PostSectionFive';
import PostSectionSix from '../common/components/post/PostSectionSix';
import SliderOne from '../common/components/slider/SliderOne';
import FooterTwo from '../common/elements/footer/FooterTwo';


const HomeDefault = ({allPosts}) => {

  const videoPost = allPosts.filter(post => post.postFormat === "video");
 
  return ( 
    <>
      <HeadTitle pageTitle="Homepage" />
      <HeaderOne postData={allPosts}/> {/* Main header: navigation */}
      <SliderOne postData={allPosts} /> {/* Main header: featured blog posts */}
      <PostSectionOne postData={allPosts}/> {/* Recent Articles */}
      <PostSectionTwo postData={allPosts} adBanner={true} /> 
      {/* <PostSectionSix postData={allPosts} /> Most Popular */}
      <CategoryList cateData={allPosts}/> {/* Trending Topics */}
      <PostSectionFive postData={allPosts}/> {/* More Horror Goodies */}
      <SocialOne /> {/* Social links */}
      <PostSectionFour postData={allPosts} adBanner={true} /> {/* Most Recent List */}
      {/* <PostSectionThree postData={videoPost} heading="Featured Video"/> */}
      <InstagramOne parentClass="bg-color-grey"/> {/* IG links */}
      <FooterTwo /> {/* Simplest Footer */}
      
    </>
   );
}
 
export default HomeDefault;


export async function getStaticProps() {
  const allPosts = getAllPosts([
    'id',
    'title',
    'featureImg',
    'postFormat',
    'featured',
    'slidePost',
    'date',
    'slug',
    'cate',
    'cate_img',
    'author_img',
    'author_name',
    'post_views',
    'read_time',
    'author_social',
  ])

  return {
    props: { allPosts }
  }
}



