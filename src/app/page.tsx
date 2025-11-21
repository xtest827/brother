import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  // ────────────────────── 新增这几行防护 ──────────────────────
  if (allPosts.length === 0) {
    return (
      <main>
        <Container>
          <Intro />
          <p className="text-center text-gray-500 mt-10">暂无文章</p>
        </Container>
      </main>
    );
  }
  // ───────────────────────────────────────────────────────────

  const heroPost = allPosts[0]!;        // 现在可以安全地用 ! 断言非空
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
