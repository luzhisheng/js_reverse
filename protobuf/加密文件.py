from protobuf import addressbook_pb2

address_book = addressbook_pb2.AddressBook()
person = address_book.people.add()

person.id = 11
person.name = "python"
person.email = "@youyuanxue.com"

phone_number = person.phones.add()
phone_number.number.extend(['32', '47'])
phone_number.type = 1

print(address_book.SerializeToString())

with open("people.bin", "wb") as f:
    f.write(address_book.SerializeToString())
