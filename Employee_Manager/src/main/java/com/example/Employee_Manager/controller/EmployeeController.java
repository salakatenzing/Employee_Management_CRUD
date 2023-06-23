package com.example.Employee_Manager.controller;


import com.example.Employee_Manager.model.Account;
import com.example.Employee_Manager.model.Employee;
import com.example.Employee_Manager.repository.AccountRepository;
import com.example.Employee_Manager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private AccountRepository accountRepository;
	@GetMapping("/users")
	public List<Account> getUser(){
		return accountRepository.findAll();
	}
	//get the account
	@GetMapping("/users/{id}")
	public ResponseEntity<Account> getAccountByID(@PathVariable Long id){
		Optional<Account> account = accountRepository.findById(id);
//				.orElseThrow(() -> new ResourceNotFoundException("Account not exist with id: " +id));
		return ResponseEntity.ok(account.get());
	}
	//create account
	@PostMapping("/users")
	public Account createAccount(@RequestBody Account account) {
		return accountRepository.save(account);
	}
	
	// get all the employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	//create employee rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		
			return employeeRepository.save(employee);
	}
	
	//get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		
		Optional<Employee> employee = employeeRepository.findById(id);
//				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" +id));
		return ResponseEntity.ok(employee.get());
		
		
	}
	
	//update employee rest api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails){
		
		Optional<Employee> employee = employeeRepository.findById(id);
//				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" +id));
		employee.get().setFirstName(employeeDetails.getFirstName());
		employee.get().setLastName(employeeDetails.getLastName());
		employee.get().setEmailId(employeeDetails.getEmailId());
		
		Employee updatedEmployee = employeeRepository.save(employee.get());
		
		return ResponseEntity.ok(updatedEmployee);
		
	}
	
	//Delete Employee REST API
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Optional<Employee> employee = employeeRepository.findById(id);
//				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" +id));
		employeeRepository.delete(employee.get());
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
}
