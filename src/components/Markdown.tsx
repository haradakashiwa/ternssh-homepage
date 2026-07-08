import { Link } from "react-router-dom";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { resolveDocHref, stripDocHeader } from "../lib/docs";

const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    img: [...(defaultSchema.attributes?.img ?? []), "src", "alt", "className"],
    a: [...(defaultSchema.attributes?.a ?? []), "href", "target", "rel"],
  },
};

const docComponents: Components = {
    a: ({ href = "", children }) => {
      const resolved = resolveDocHref(href);
      if (resolved.to) {
        return <Link to={resolved.to}>{children}</Link>;
      }
      return (
        <a
          href={resolved.href ?? href}
          target={resolved.external ? "_blank" : undefined}
          rel={resolved.external ? "noopener noreferrer" : undefined}
          className="text-[var(--color-primary)] underline-offset-2 hover:underline"
        >
          {children}
        </a>
      );
    },
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-[var(--color-foreground)]" {...props}>
        {children}
      </strong>
    ),
    h1: ({ children, ...props }) => (
      <h1
        className="mb-6 text-3xl font-bold tracking-tight text-[var(--color-foreground)]"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="mt-10 mb-4 border-b border-[var(--color-border)] pb-2 text-xl font-semibold text-[var(--color-foreground)]"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="mt-8 mb-3 text-lg font-semibold text-[var(--color-foreground)]"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="mt-6 mb-2 text-base font-semibold text-[var(--color-foreground)]"
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p
        className="my-4 leading-7 text-[var(--color-muted-foreground)]"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="my-4 list-disc space-y-2 pl-6 text-[var(--color-muted-foreground)]"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="my-4 list-decimal space-y-2 pl-6 text-[var(--color-muted-foreground)]"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-7" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-4 border-l-4 border-[var(--color-primary)] bg-[color-mix(in_oklch,var(--color-primary)_6%,transparent)] px-4 py-2 text-sm text-[var(--color-muted-foreground)]"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({ className, children, ...props }) => {
      const isBlock = Boolean(className);
      if (isBlock) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      return (
        <code
          className="rounded bg-[var(--color-secondary)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--color-foreground)]"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children, ...props }) => (
      <pre
        className="my-4 overflow-x-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-secondary)]/60 p-4 text-sm leading-6 text-[var(--color-foreground)]"
        {...props}
      >
        {children}
      </pre>
    ),
    table: ({ children, ...props }) => (
      <div className="my-6 overflow-x-auto">
        <table
          className="w-full border-collapse text-sm text-[var(--color-muted-foreground)]"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border border-[var(--color-border)] bg-[var(--color-secondary)] px-3 py-2 text-left font-semibold text-[var(--color-foreground)]"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border border-[var(--color-border)] px-3 py-2"
        {...props}
      >
        {children}
      </td>
    ),
    hr: (props) => (
      <hr className="my-8 border-[var(--color-border)]" {...props} />
    ),
    img: ({ alt, ...props }) => (
      <img
        alt={alt}
        className="my-4 max-w-full rounded-lg"
        loading="lazy"
        {...props}
      />
    ),
};

interface MarkdownProps {
  content: string;
  stripHeader?: boolean;
}

export function Markdown({ content, stripHeader = true }: MarkdownProps) {
  const processed = stripHeader ? stripDocHeader(content) : content;

  return (
    <article className="docs-prose max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        components={docComponents}
      >
        {processed}
      </ReactMarkdown>
    </article>
  );
}
