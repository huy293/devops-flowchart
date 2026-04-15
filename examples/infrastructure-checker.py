import os
import subprocess
import json

class InfrastructureChecker:
    def __init__(self):
        self.health_report = {}

    def check_service_health(self, service_name):
        try:
            output = subprocess.check_output(['systemctl', 'is-active', service_name])
            return output.strip().decode('utf-8') == 'active'
        except subprocess.CalledProcessError:
            return False

    def generate_report(self):
        services = ['nginx', 'mysql', 'docker']  # Example services
        for service in services:
            self.health_report[service] = self.check_service_health(service)
        return json.dumps(self.health_report, indent=4)

if __name__ == '__main__':
    checker = InfrastructureChecker()
    report = checker.generate_report()
    print("Infrastructure Health Report:")
    print(report)