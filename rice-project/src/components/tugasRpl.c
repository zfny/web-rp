counter = 1

while counter <= 30:
    print(f"\nMahasiswa {counter}")

    while True:
        nilai = input("Masukkan nilai (0-100): ")

        # Validasi apakah input berupa integer
        if not nilai.isdigit():
            print("Input harus berupa bilangan bulat (integer)!")
            continue

        nilai = int(nilai)

        # Validasi rentang nilai
        if nilai < 0 or nilai > 100:
            print("Nilai harus antara 0 dan 100!")
            continue

        break

    # Menentukan nilai huruf
    if nilai >= 91:
        print("A")
    elif nilai >= 71:
        print("B")
    elif nilai >= 61:
        print("C")
    elif nilai >= 41:
        print("D")
    else:
        print("E")

    counter += 1