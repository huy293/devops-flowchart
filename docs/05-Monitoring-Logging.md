# Monitoring and Logging

## Prometheus
- Monitoring system and time series database.
- Uses a powerful query language (PromQL).
- Pulls metrics from configured targets at specified intervals.
- Service discovery or static configuration to scrape targets.

## ELK Stack
- **Elasticsearch**: Store and search log data.
- **Logstash**: Process and transform logs.
- **Kibana**: Visualize log data in charts and dashboards.
- Centralizes log data for better monitoring and analysis.

## Grafana
- Open-source tool for monitoring and observability.
- Supports various data sources including Prometheus and Elasticsearch.
- Allows creating interactive dashboards and alerts.
- Useful for visualizing metrics in real-time.

## Datadog
- Monitoring and analytics platform for cloud applications.
- Provides comprehensive monitoring for servers, databases, tools, and services.
- Integrates seamlessly with a variety of technologies.
- Offers out-of-the-box dashboards but also allows custom dashboards.

## New Relic
- Performance monitoring tool for applications and infrastructure.
- Provides telemetry data to debug and analyze performance issues.
- Supports various programming languages and frameworks.
- Strong focus on user experience and application performance management.

## Observability Best Practices
1. **Centralized Logging**: Aggregate logs from all services to a centralized platform.
2. **Metrics Collection**: Continuously gather metrics from your applications and infrastructure.
3. **Traces**: Implement distributed tracing to monitor requests as they traverse multiple services.
4. **Alerts**: Set up alerts to notify teams of issues in real-time.
5. **Regular Review**: Continuously review and update observability practices and tools to adapt to changes in the stack.
6. **Documentation**: Keep documentation up-to-date reflecting changes in observability practices.
