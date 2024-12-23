import os
import string

def rename_images(directory):
    # Get all files in the directory
    files = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    
    # Filter image files by extension
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'}
    images = [f for f in files if os.path.splitext(f)[1].lower() in image_extensions]

    # Sort images for consistency
    images.sort()

    # Generate new names using alphabet letters
    alphabet = string.ascii_uppercase

    changeName = input("New name: ").strip()

    for index, image in enumerate(images):
        letter = alphabet[index % len(alphabet)]
        number = index // len(alphabet) + 1
        new_name = f"{changeName}{letter}{number}.jpg"

        old_path = os.path.join(directory, image)
        new_path = os.path.join(directory, new_name)
        
        os.rename(old_path, new_path)
        print(f"Renamed: {image} -> {new_name}")

if __name__ == "__main__":
    directory = input("Enter the directory containing images: ").strip()

    if not os.path.isdir(directory):
        print("Invalid directory. Please provide a valid path.")
    else:
        rename_images(directory)
        print("Image renaming complete.")
