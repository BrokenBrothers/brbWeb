from rest_framework import serializers
from Apps.Portfolio.models import Contact

# Contact serializer
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

