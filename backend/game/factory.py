import factory
from game.models import Game, Package, Platform
from faker import Faker

faker = Faker()


class GameFactory(factory.DjangoModelFactory):

    class Meta:
        model = Game

    name = factory.faker.Faker("word")
    cover_image = factory.django.ImageField(
        width=204, height=234, color=faker.safe_color_name())
    official_repository = factory.faker.Faker("url")
    visualization = factory.faker.Faker('pyint')
    game_activated = True


class PlatformFactory(factory.DjangoModelFactory):

    class Meta:

        model = Platform

    name = factory.faker.Faker("word")
    extensions = factory.LazyAttribute(lambda x: "deb")
    kernel = factory.LazyAttribute(lambda x: "Linux")


class PackageFactory(factory.DjangoModelFactory):

    class Meta:
        model = Package

    package = factory.django.FileField(data=b'1' * 10, filename='package.deb')
    game = factory.SubFactory(GameFactory)
    downloads = factory.faker.Faker('pyint')
    architecture = factory.LazyAttribute(lambda x: "AMD64/64-bit")
