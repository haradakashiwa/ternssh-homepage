import { Navigate, useParams } from "react-router-dom";
import { Markdown } from "../components/Markdown";
import { DocsSidebar } from "../components/DocsSidebar";
import { useApp } from "../lib/app-context";
import { getDocContent, isDocLocale, slugToPageName } from "../lib/docs";

export function DocsIndexPage() {
  return <Navigate to="/docs/home" replace />;
}

export function DocsLegacyRedirectPage() {
  const { lang, slug } = useParams();
  if (isDocLocale(lang ?? "") && slug) {
    return <Navigate to={`/docs/${slug}`} replace />;
  }
  return <Navigate to="/docs/home" replace />;
}

export function DocsArticlePage() {
  const { locale } = useApp();
  const { slug = "home" } = useParams();

  if (isDocLocale(slug)) {
    return <Navigate to="/docs/home" replace />;
  }

  const content = getDocContent(locale, slug);

  if (!content || !slugToPageName(slug)) {
    return <Navigate to="/docs/home" replace />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <DocsSidebar />
        <div className="min-w-0 flex-1">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <Markdown content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
