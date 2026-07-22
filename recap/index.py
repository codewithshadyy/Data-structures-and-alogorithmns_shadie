
# name = str(input("What's your name?:"))
# age = int(input("Whats your age:"))

# print(f"Hey {name} you are {age} years old")


# def letWork():
#     name = str(input("What's your name?:"))
#     age = int(input("Whats your age:"))

#     print(f"Hey {name} you are {age} years old")
    
    
    
# letWork()  



"""""

PYthon Data types:

we have python built in  Data Types

Text Type:	str
Numeric Types:	int, float, complex
Sequence Types:	list, tuple, range
Mapping Type:	dict
Set Types:	set, frozenset
Boolean Type:	bool
Binary Types:	bytes, bytearray, memoryview
None Type:	NoneType

"""  

# import random

# def showRandom():
#     x = float(random.randrange(1, 10))
#     print(x)
    
# showRandom()    

"""""
Python Strings
"""

# name = "kipkoech"

# for n in name:
#     print(n)

# if "m" in  name:
#     print("Yoh i am present")
    
# else:
#     print("i am absent") 


"""""
Python List
""" 

# cars = ["Benz", "Audi", "BMW"]

"""""
List Actions
access = cars[index]
adding to list = cars.append(), insert(), extends()
change values in list = cars[0] = "Volvo"  or cars.insert(index, item)
remove values = cars.remove(), pop(), del cars[index]
"""

# import json
# from deep_translator import GoogleTranslator
 
# client = {
#      "name":"kipkoech",
#      "age":56,
#      "children":("superdad", "shadie"),
#      "skills":[
#          "Javacript", "python", "MongoDB", "postgressql"
#      ],
     
#  }

# data = json.dumps(client, indent=4)

# translated_data = GoogleTranslator(
#     source="en",
#     target="ar"
# ).translate(data)

# print(translated_data)

# with open("client.json", "w") as file:
#     json.dump(data, file, indent=4)

# import json
# class Person:
    
#     def __init__(self, name, age, *skills):
#         self.name = name
#         self.age= age
#         self.skills = skills
        
#     def __str__(self):
#         return f"{self.name} {self.age} {self.skills}"    
        
#     def sayhi(self):
         
#         print(f"Hello {self.name} you are {self.age} with {self.skills[0]} skill")     
        

# koech = Person("koech", 56, "js", "python") 

# print(koech) 


# koech.sayhi()


# class Playlist:
#     def __init__(self, name):
#         self.name = name
#         self.songs = []
    
#     def add_song(self, song):
#        self.songs.append(song) 
#        print(f"Added {song} to {self.name} songs") 
       
#     def show_playlist(self):
#         print(f"{self.name} Playlist")
#         for song in self.songs:
#             print(song)
           
       
# liked = Playlist("Liked")
# liked.add_song("lonely at the top")
# liked.add_song("Snow on tha bluff")
# liked.add_song("tale of 2 citez")
# liked.add_song("January 28")

# liked.show_playlist()


# inheritance

# class Animal:
#     def __init__(self, name, sound):
#         self.name = name
#         self.sound= sound
        
#     def make_sound(self):
#         print(f"{self.name} {self.sound}")   
        
# class Dog(Animal):
#     def __init__(self, name, sound):
#         super().__init__(name, sound) 
        
# d1 = Dog("Jimmy", "barks")  
# d1.make_sound()   


# #polymorphism

# """"
# The word "polymorphism" means "many forms", 
# and in programming it refers to methods/functions/operators 
# with the same name that can be executed on many objects or classes.
# """

# class Vehicle:
#     def __init__(self, brand, model):
#         self.brand = brand
#         self.model = model
#     def move(self):
#         print("Drive")    

# # class Plane:
# #     def __init__(self, brand, model):
# #         self.brand = brand
# #         self.model = model
# #     def move(self):
# #         print("Flys")  
        
# # class Boat:
# #     def __init__(self, brand, model):
# #         self.brand = brand
# #         self.model = model
# #     def move(self):
# #         print("Sails")  
        
# # car1 = Car("Benz", "GLE")
# # boat1 = Boat("Ibiza", "Touring 20")
# # plane1 = Plane("Boeing", "747")  


# # for x in (car1, boat1, plane1):
# #     x.move()              

# class Car(Vehicle):
#   pass

# class Boat(Vehicle):
#   def move(self):
#     print("Sail!")

# class Plane(Vehicle):
#   def move(self):
#     print("Fly!")
    
    
    
# car1 = Car("Benz", "GLE")
# boat1 = Boat("Ibiza", "Touring 20")
# plane1 = Plane("Boeing", "747")  


# for x in (car1, boat1, plane1):
#      print(x.brand)
#      print(x.model)
#      x.move()    


# polymorphism

# class Person:
#     def __init__(self, name, age):
        
#         self.name = name
#         self.__age = age
        
        
      
        
        
          

# p1 = Person("james", 51)

# print(p1.__age)



    