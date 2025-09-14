import BlogDetailBanner from '../BlogDetailSection/BlogDetailBanner'
import BlogDetailFooter from '../BlogDetailSection/BlogDetailFooter'
import CommentForm from '../BlogDetailSection/CommentForm'
import CommentsSection from '../BlogDetailSection/CommentsSection'
import TipsDetail from '../BlogDetailSection/TipsDetail'

const BlogDetail = () => {
  return (
    <div>
        <BlogDetailBanner />
        <TipsDetail />
        <CommentsSection />
        <CommentForm />
        <BlogDetailFooter />
    </div>
  )
}

export default BlogDetail