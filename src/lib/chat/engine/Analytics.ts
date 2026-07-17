interface AnalyticsData {
  totalConversations: number;
  totalLeads: number;
  topServices: Record<string, number>;
  avgConversationLength: number;
}

export class Analytics {
  private static DATA_KEY = "SIMPLEIN_chat_analytics";

  static get(): AnalyticsData {
    if (typeof window === "undefined") return { totalConversations: 0, totalLeads: 0, topServices: {}, avgConversationLength: 0 };
    const data = localStorage.getItem(this.DATA_KEY);
    return data ? JSON.parse(data) : { totalConversations: 0, totalLeads: 0, topServices: {}, avgConversationLength: 0 };
  }

  static save(data: AnalyticsData) {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.DATA_KEY, JSON.stringify(data));
    }
  }

  static trackServiceView(serviceId: string) {
    const data = this.get();
    data.topServices[serviceId] = (data.topServices[serviceId] || 0) + 1;
    this.save(data);
  }

  static trackConversation(length: number) {
    const data = this.get();
    const totalLen = data.avgConversationLength * data.totalConversations + length;
    data.totalConversations++;
    data.avgConversationLength = totalLen / data.totalConversations;
    this.save(data);
  }

  static trackLead() {
    const data = this.get();
    data.totalLeads++;
    this.save(data);
  }
}
