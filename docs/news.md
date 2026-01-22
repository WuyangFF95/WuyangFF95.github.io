# News & Updates / 新闻动态

<style>
.news-item {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin: 2rem 0;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.news-image {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid var(--vp-c-border);
  align-self: start;
}

.news-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.news-image a {
  display: block;
  line-height: 0;
}

.news-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.news-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.3s ease;
}

.news-title a:hover {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

.news-date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.news-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.news-links a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.3s ease;
}

.news-links a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .news-item {
    grid-template-columns: 1fr;
  }
}
</style>

## Latest News / 最新新闻

<!-- News Item Placeholder -->
<!-- 新闻条目占位符 -->
<div class="news-item">
<div class="news-image">
<a href="#" target="_blank">
<img src="/images/team/placeholder.svg" alt="News Placeholder / 新闻占位符" />
</a>
</div>
<div class="news-content">
<div class="news-title"><a href="#" target="_blank">[News Title Placeholder / 新闻标题占位符]</a></div>
<div class="news-date">[Date Placeholder / 日期占位符]</div>
<div class="news-links">

[News Description Placeholder / 新闻描述占位符]

</div>
</div>
</div>

---

## LinkedIn Updates / LinkedIn动态

<div style="margin: 2rem 0;">
  <p style="font-size: 1.1rem; color: var(--vp-c-text-1); margin-bottom: 1.5rem;">
    Follow <a href="[LinkedIn Profile URL Placeholder]" target="_blank" style="color: #0077b5; text-decoration: none; font-weight: bold;">WU Yang</a> on LinkedIn for the latest updates:
    在LinkedIn上关注<a href="[LinkedIn Profile URL Placeholder]" target="_blank" style="color: #0077b5; text-decoration: none; font-weight: bold;">武洋</a>获取最新动态：
  </p>

  <ClientOnly>
    <LinkedInPosts />
  </ClientOnly>
</div>

---

*This page will be regularly updated with the latest news. / 本页面将定期更新最新新闻。*
