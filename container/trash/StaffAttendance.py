import pandas as pd
from datetime import datetime

class StaffAttendance:
    def __init__(self):
        self.attendance_record = pd.DataFrame(columns=['Staff ID', 'Date', 'Present'])

    def mark_attendance(self, staff_id):
        if staff_id in self.attendance_record['Staff ID'].values:
            print("Attendance already marked for this staff today.")
        else:
            today = datetime.now().strftime('%Y-%m-%d')
            self.attendance_record = self.attendance_record.append({'Staff ID': staff_id, 'Date': today, 'Present': True}, ignore_index=True)
            print("Attendance marked successfully.")

    def save_to_excel(self):
        self.attendance_record.to_excel("staff_attendance.xlsx", index=False)
        print("Attendance details saved to staff_attendance.xlsx")


def main():
    staff_attendance = StaffAttendance()

    while True:
        print("\n1. Mark Attendance")
        print("2. Save to Excel")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            staff_id = input("Enter staff ID: ")
            staff_attendance.mark_attendance(staff_id)
        elif choice == '2':
            staff_attendance.save_to_excel()
        elif choice == '3':
            print("Exiting program.")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
