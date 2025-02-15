// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrescriptionStorage {
    struct Prescription {
        string name;
        uint age;
        string gender;
        string disease;
    }

    Prescription[] public prescriptions;

    event PrescriptionAdded(string name, uint age, string gender, string disease);

    function addPrescription(
        string memory _name,
        uint _age,
        string memory _gender,
        string memory _disease
    ) public {
        prescriptions.push(Prescription(_name, _age, _gender, _disease));
        emit PrescriptionAdded(_name, _age, _gender, _disease);
    }

    function getPrescription(uint index) public view returns (string memory, uint, string memory, string memory) {
        Prescription memory prescription = prescriptions[index];
        return (prescription.name, prescription.age, prescription.gender, prescription.disease);
    }

    function getTotalPrescriptions() public view returns (uint) {
        return prescriptions.length;
    }
}
