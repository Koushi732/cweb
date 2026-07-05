export class NavigationEngine {
  static getRoute(intent: string): string | null {
    const routes: Record<string, string> = {
      "hardware": "/hardware",
      "service": "/services",
      "industry": "/industries",
      "company": "/about",
      "contact": "/contact",
      "pricing": "/contact#contact-form",
    };
    return routes[intent] || null;
  }
}
