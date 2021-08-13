from protobuf import addressbook_pb2


def list_people(address_book):
    for person in address_book.people:
        print("person id:", person.id)
        print("person name:", person.name)
        print("person email:", person.email)

        for phone_number in person.phones:
            print(phone_number.number)


address_book = addressbook_pb2.AddressBook()

with open("people.bin", "rb") as f:
    address_book.ParseFromString(f.read())

list_people(address_book)
