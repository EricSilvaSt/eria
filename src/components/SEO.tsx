import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: object;
}

export default function SEO({
  title,
  description,
  keywords = 'desenvolvimento web Salvador, criação de sites Bahia, e-commerce, sistemas personalizados, agentes de IA',
  image = 'https://eria.tec.br/eria_logo.jpeg',
  type = 'website',
  schema
}: SEOProps) {
  const location = useLocation();
  const url = `https://eria.tec.br${location.pathname}`;

  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'ER.IA' },
      { property: 'og:locale', content: 'pt_BR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }

    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        schemaScript.textContent = JSON.stringify(schema);
      } else {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.textContent = JSON.stringify(schema);
        document.head.appendChild(schemaScript);
      }
    }
  }, [title, description, keywords, image, type, url, schema]);

  return null;
}
