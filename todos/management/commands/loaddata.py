from django.core.management.base import BaseCommand
from todos.models import Todo
import csv

MODELS = {
    "Todo": Todo,
}


class Command(BaseCommand):

    def handle(self, *args, **options):

        for model_name, model in MODELS.items():
            with open(f'data/{model_name.lower()}s.csv') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    data = {field_name: row[field_name] for field_name in row}
                    obj = model(**data)
                    obj.save()
                    print(f"Created {model_name}: {obj.title}")
