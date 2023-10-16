package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FeedbackRequest;
import com.example.demo.dto.FeedbackResponse;
import com.example.demo.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
@CrossOrigin("*")

public class FeedbackController {
	@Autowired
	private final FeedbackService feedbackService;

	@PostMapping("/postFeedback")
	public ResponseEntity<String> addFeedback(@RequestBody FeedbackRequest feedbackRequest) {
		feedbackService.addFeedback(feedbackRequest);
		return ResponseEntity.status(HttpStatus.CREATED).body("Feedback added!");

	}

	@GetMapping("/getFeedback")
	public ResponseEntity<List<FeedbackResponse>> getFeedback() {
		return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getFeedback());
	}
}
