import pandas as pd

class StudentMarkEntry:
    def __init__(self):
        self.mark_sheet = pd.DataFrame(columns=['Student ID', 'Marks'])

    def enter_marks(self, student_id, marks):
        if student_id in self.mark_sheet['Student ID'].values:
            print("Marks already entered for this student.")
        else:
            self.mark_sheet = self.mark_sheet.append({'Student ID': student_id, 'Marks': marks}, ignore_index=True)
            print("Marks entered successfully.")

    def save_to_excel(self):
        self.mark_sheet.to_excel("student_marks.xlsx", index=False)
        print("Mark details saved to student_marks.xlsx")


def main():
    mark_entry = StudentMarkEntry()

    while True:
        print("\n1. Enter Marks")
        print("2. Save to Excel")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            student_id = input("Enter student ID: ")
            marks = input("Enter marks: ")
            mark_entry.enter_marks(student_id, marks)
        elif choice == '2':
            mark_entry.save_to_excel()
        elif choice == '3':
            print("Exiting program.")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
