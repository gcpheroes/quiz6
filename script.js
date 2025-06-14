// script.js

// ─── Question Data ─────────────────────────────────────────────────────────
const questions = [
  {
    "question": "Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs.\n\nWhat should they do?",
    "options": [
      "Configure a new load balancer for the new version of the API",
      "Reconfigure old clients to use a new endpoint for the new API",
      "Have the old API forward traffic to the new API based on the path",
      "Use separate backend pools for each API path behind the load balancer"
    ],
    "answer": [
      "Use separate backend pools for each API path behind the load balancer"
    ],
    "multiple": false
  },
  {
    "question": "Your company plans to migrate a multi-petabyte data set to the cloud. The data set must be available 24hrs a day. Your business analysts have experience only with using a SQL interface.\n\nHow should you store the data to optimize it for ease of analysis?",
    "options": [
      "Load data into Google BigQuery",
      "Insert data into Google Cloud SQL",
      "Put flat files into Google Cloud Storage",
      "Stream data into Google Cloud Datastore"
    ],
    "answer": [
      "Load data into Google BigQuery"
    ],
    "multiple": false
  },
  {
    "question": "The operations manager asks you for a list of recommended practices that she should consider when migrating a J2EE application to the cloud.\n\nWhich three practices should you recommend? (Choose three.)",
    "options": [
      "Port the application code to run on Google App Engine",
      "Integrate Cloud Dataflow into the application to capture real-time metrics",
      "Instrument the application with a monitoring tool like Stackdriver Debugger",
      "Select an automation framework to reliably provision the cloud infrastructure",
      "Deploy a continuous integration tool with automated testing in a staging environment",
      "Migrate from MySQL to a managed NoSQL database like Google Cloud Datastore or Bigtable"
    ],
    "answer": [
      "Instrument the application with a monitoring tool like Stackdriver Debugger",
      "Select an automation framework to reliably provision the cloud infrastructure",
      "Deploy a continuous integration tool with automated testing in a staging environment"
    ],
    "multiple": true
  },
  {
    "question": "A news feed web service has the following code running on Google App Engine. During peak load, users report that they can see news articles they already viewed.\n\nWhat is the most likely cause of this problem?\n\nhttps://www.examtopics.com/assets/media/exam-media/04339/0007100001.png",
    "options": [
      "The session variable is local to just a single instance",
      "The session variable is being overwritten in Cloud Datastore",
      "The URL of the API needs to be modified to prevent caching",
      "The HTTP Expires header needs to be set to -1 stop caching"
    ],
    "answer": [
      "The session variable is local to just a single instance"
    ],
    "multiple": false
  },
  {
    "question": "An application development team believes their current logging tool will not meet their needs for their new cloud-based product. They want a better tool to capture errors and help them analyze their historical log data. You want to help them find a solution that meets their needs.\n\nWhat should you do?",
    "options": [
      "Direct them to download and install the Google StackDriver logging agent",
      "Send them a list of online resources about logging best practices",
      "Help them define their requirements and assess viable logging tools",
      "Help them upgrade their current tool to take advantage of any new features"
    ],
    "answer": [
      "Direct them to download and install the Google StackDriver logging agent"
    ],
    "multiple": false
  },
  {
    "question": "You need to reduce the number of unplanned rollbacks of erroneous production deployments in your company's web hosting platform. Improvement to the QA/Test processes accomplished an 80% reduction.\n\nWhich additional two approaches can you take to further reduce the rollbacks? (Choose two.)",
    "options": [
      "Introduce a green-blue deployment model",
      "Replace the QA environment with canary releases",
      "Fragment the monolithic platform into microservices",
      "Reduce the platform's dependency on relational database systems",
      "Replace the platform's relational database systems with a NoSQL database"
    ],
    "answer": [
      "Introduce a green-blue deployment model",
      "Fragment the monolithic platform into microservices"
    ],
    "multiple": true
  },
  {
    "question": "To reduce costs, the Director of Engineering has required all developers to move their development infrastructure resources from on-premises virtual machines (VMs) to Google Cloud Platform. These resources go through multiple start/stop events during the day and require state to persist. You have been asked to design the process of running a development environment in Google Cloud while providing cost visibility to the finance department.\n\nWhich two steps should you take? (Choose two.)",
    "options": [
      "Use the - -no-auto-delete flag on all persistent disks and stop the VM",
      "Use the - -auto-delete flag on all persistent disks and terminate the VM",
      "Apply VM CPU utilization label and include it in the BigQuery billing export",
      "Use Google BigQuery billing export and labels to associate cost to groups",
      "Store all state into local SSD, snapshot the persistent disks, and terminate the VM",
      "Store all state in Google Cloud Storage, snapshot the persistent disks, and terminate the VM"
    ],
    "answer": [
      "Use the - -no-auto-delete flag on all persistent disks and stop the VM",
      "Use Google BigQuery billing export and labels to associate cost to groups"
    ],
    "multiple": true
  },
  {
    "question": "Your company wants to track whether someone is present in a meeting room reserved for a scheduled meeting. There are 1000 meeting rooms across 5 offices on 3 continents. Each room is equipped with a motion sensor that reports its status every second. The data from the motion detector includes only a sensor ID and several different discrete items of information. Analysts will use this data, together with information about account owners and office locations.\n\nWhich database type should you use?",
    "options": [
      "Flat file",
      "NoSQL",
      "Relational",
      "Blobstore"
    ],
    "answer": [
      "NoSQL"
    ],
    "multiple": false
  },
  {
    "question": "You set up an autoscaling instance group to serve web traffic for an upcoming launch. After configuring the instance group as a backend service to an HTTP(S) load balancer, you notice that virtual machine (VM) instances are being terminated and re-launched every minute. The instances do not have a public IP address.\n\nYou have verified the appropriate web response is coming from each instance using the curl command. You want to ensure the backend is configured correctly.\n\nWhat should you do?",
    "options": [
      "Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.",
      "Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.",
      "Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.",
      "Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination."
    ],
    "answer": [
      "Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group."
    ],
    "multiple": false
  },
  {
    "question": "You write a Python script to connect to Google BigQuery from a Google Compute Engine virtual machine. The script is printing errors that it cannot connect to\nBigQuery.\n\nWhat should you do to fix the script?",
    "options": [
      "Install the latest BigQuery API client library for Python",
      "Run your script on a new virtual machine with the BigQuery access scope enabled",
      "Create a new service account with BigQuery access and execute your script with that user",
      "Install the bq component for gcloud with the command gcloud components install bq."
    ],
    "answer": [
      "Create a new service account with BigQuery access and execute your script with that user"
    ],
    "multiple": false
  },
  {
    "question": "Your customer is moving an existing corporate application to Google Cloud Platform from an on-premises data center. The business owners require minimal user disruption. There are strict security team requirements for storing passwords.\n\nWhat authentication strategy should they use?",
    "options": [
      "Use G Suite Password Sync to replicate passwords into Google",
      "Federate authentication via SAML 2.0 to the existing Identity Provider",
      "Provision users in Google using the Google Cloud Directory Sync tool",
      "Ask users to set their Google password to match their corporate password"
    ],
    "answer": [
      "Federate authentication via SAML 2.0 to the existing Identity Provider"
    ],
    "multiple": false
  },
  {
    "question": "Your company has successfully migrated to the cloud and wants to analyze their data stream to optimize operations. They do not have any existing code for this analysis, so they are exploring all their options. These options include a mix of batch and stream processing, as they are running some hourly jobs and live- processing some data as it comes in.\n\nWhich technology should they use for this?",
    "options": [
      "Google Cloud Dataproc",
      "Google Cloud Dataflow",
      "Google Container Engine with Bigtable",
      "Google Compute Engine with Google BigQuery"
    ],
    "answer": [
      "Google Cloud Dataflow"
    ],
    "multiple": false
  },
  {
    "question": "Your customer is receiving reports that their recently updated Google App Engine application is taking approximately 30 seconds to load for some of their users.\nThis behavior was not reported before the update.\n\nWhat strategy should you take?",
    "options": [
      "Work with your ISP to diagnose the problem",
      "Open a support ticket to ask for network capture and flow data to diagnose the problem, then roll back your application",
      "Roll back to an earlier known good release initially, then use Stackdriver Trace and Logging to diagnose the problem in a development/test/staging environment",
      "Roll back to an earlier known good release, then push the release again at a quieter period to investigate. Then use Stackdriver Trace and Logging to diagnose the problem"
    ],
    "answer": [
      "Roll back to an earlier known good release initially, then use Stackdriver Trace and Logging to diagnose the problem in a development/test/staging environment"
    ],
    "multiple": false
  },
  {
    "question": "A production database virtual machine on Google Compute Engine has an ext4-formatted persistent disk for data files. The database is about to run out of storage space.\n\nHow can you remediate the problem with the least amount of downtime?",
    "options": [
      "In the Cloud Platform Console, increase the size of the persistent disk and use the resize2fs command in Linux.",
      "Shut down the virtual machine, use the Cloud Platform Console to increase the persistent disk size, then restart the virtual machine",
      "In the Cloud Platform Console, increase the size of the persistent disk and verify the new space is ready to use with the fdisk command in Linux",
      "In the Cloud Platform Console, create a new persistent disk attached to the virtual machine, format and mount it, and configure the database service to move the files to the new disk",
      "In the Cloud Platform Console, create a snapshot of the persistent disk restore the snapshot to a new larger disk, unmount the old disk, mount the new disk and restart the database service"
    ],
    "answer": [
      "In the Cloud Platform Console, increase the size of the persistent disk and use the resize2fs command in Linux."
    ],
    "multiple": false
  },
  {
    "question": "Your application needs to process credit card transactions. You want the smallest scope of Payment Card Industry (PCI) compliance without compromising the ability to analyze transactional data and trends relating to which payment methods are used.\n\nHow should you design your architecture?",
    "options": [
      "Create a tokenizer service and store only tokenized data",
      "Create separate projects that only process credit card data",
      "Create separate subnetworks and isolate the components that process credit card data",
      "Streamline the audit discovery phase by labeling all of the virtual machines (VMs) that process PCI data",
      "Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor"
    ],
    "answer": [
      "Create a tokenizer service and store only tokenized data"
    ],
    "multiple": false
  },
  {
    "question": "You have been asked to select the storage system for the click-data of your company's large portfolio of websites. This data is streamed in from a custom website analytics package at a typical rate of 6,000 clicks per minute. With bursts of up to 8,500 clicks per second. It must have been stored for future analysis by your data science and user experience teams.\n\nWhich storage infrastructure should you choose?",
    "options": [
      "Google Cloud SQL",
      "Google Cloud Bigtable",
      "Google Cloud Storage",
      "Google Cloud Datastore"
    ],
    "answer": [
      "Google Cloud Bigtable"
    ],
    "multiple": false
  },
  {
    "question": "You are creating a solution to remove backup files older than 90 days from your backup Cloud Storage bucket. You want to optimize ongoing Cloud Storage spend.\n\nWhat should you do?",
    "options": [
      "Write a lifecycle management rule in XML and push it to the bucket with gsutil",
      "Write a lifecycle management rule in JSON and push it to the bucket with gsutil ",
      "Schedule a cron script using gsutil ls \u05d2\u20ac\"lr gs://backups/** to find and remove items older than 90 days",
      "Schedule a cron script using gsutil ls \u05d2\u20ac\"l gs://backups/** to find and remove items older than 90 days and schedule it with cron"
    ],
    "answer": [
      "Write a lifecycle management rule in JSON and push it to the bucket with gsutil"
    ],
    "multiple": false
  },
  {
    "question": "Your company is forecasting a sharp increase in the number and size of Apache Spark and Hadoop jobs being run on your local datacenter. You want to utilize the cloud to help you scale this upcoming demand with the least amount of operations work and code change.\n\nWhich product should you use?",
    "options": [
      "Google Cloud Dataflow",
      "Google Cloud Dataproc",
      "Google Compute Engine",
      "Google Kubernetes Engine"
    ],
    "answer": [
      "Google Cloud Dataproc"
    ],
    "multiple": false
  },
  {
    "question": "The database administration team has asked you to help them improve the performance of their new database server running on Google Compute Engine. The database is for importing and normalizing their performance statistics and is built with MySQL running on Debian Linux. They have an n1-standard-8 virtual machine with 80 GB of SSD persistent disk.\n\nWhat should they change to get better performance from this system?",
    "options": [
      "Increase the virtual machine's memory to 64 GB",
      "Create a new virtual machine running PostgreSQL",
      "Dynamically resize the SSD persistent disk to 500 GB",
      "Migrate their performance metrics warehouse to BigQuery",
      "Modify all of their batch jobs to use bulk inserts into the database"
    ],
    "answer": [
      "Dynamically resize the SSD persistent disk to 500 GB"
    ],
    "multiple": false
  },
  {
    "question": "You want to optimize the performance of an accurate, real-time, weather-charting application. The data comes from 50,000 sensors sending 10 readings a second, in the format of a timestamp and sensor reading.\n\nWhere should you store the data?",
    "options": [
      "Google BigQuery",
      "Google Cloud SQL",
      "Google Cloud Bigtable",
      "Google Cloud Storage"
    ],
    "answer": [
      "Google Cloud Bigtable"
    ],
    "multiple": false
  },
  {
    "question": "Your company's user-feedback portal comprises a standard LAMP stack replicated across two zones. It is deployed in the us-central1 region and uses autoscaled managed instance groups on all layers, except the database. Currently, only a small group of select customers have access to the portal. The portal meets a 99,99% availability SLA under these conditions. However next quarter, your company will be making the portal available to all users, including unauthenticated users. You need to develop a resiliency testing strategy to ensure the system maintains the SLA once they introduce additional user load.\n\nWhat should you do?",
    "options": [
      "Capture existing users input, and replay captured user load until autoscale is triggered on all layers. At the same time, terminate all resources in one of the zones",
      "Create synthetic random user input, replay synthetic load until autoscale logic is triggered on at least one layer, and introduce \u05d2\u20acchaos\u05d2\u20ac to the system by terminating random resources on both zones",
      "Expose the new system to a larger group of users, and increase group size each day until autoscale logic is triggered on all layers. At the same time, terminate random resources on both zones",
      "Capture existing users input, and replay captured user load until resource utilization crosses 80%. Also, derive estimated number of users based on existing user's usage of the app, and deploy enough resources to handle 200% of expected load"
    ],
    "answer": [
      "Create synthetic random user input, replay synthetic load until autoscale logic is triggered on at least one layer, and introduce \u05d2\u20acchaos\u05d2\u20ac to the system by terminating random resources on both zones"
    ],
    "multiple": false
  },
  {
    "question": "One of the developers on your team deployed their application in Google Container Engine with the Dockerfile below. They report that their application deployments are taking too long.\n\nhttps://www.examtopics.com/assets/media/exam-media/04339/0008300001.png\n\nYou want to optimize this Dockerfile for faster deployment times without adversely affecting the app's functionality.\n\nWhich two actions should you take? (Choose two.)",
    "options": [
      "Remove Python after running pip",
      "Remove dependencies from requirements.txt",
      "Use a slimmed-down base image like Alpine Linux",
      "Use larger machine types for your Google Container Engine node pools",
      "Copy the source after he package dependencies (Python and pip) are installed"
    ],
    "answer": [
      "Use a slimmed-down base image like Alpine Linux",
      "Copy the source after he package dependencies (Python and pip) are installed"
    ],
    "multiple": true
  },
  {
    "question": "Your solution is producing performance bugs in production that you did not see in staging and test environments. You want to adjust your test and deployment procedures to avoid this problem in the future.\n\nWhat should you do?",
    "options": [
      "Deploy fewer changes to production",
      "Deploy smaller changes to production",
      "Increase the load on your test and staging environments",
      "Deploy changes to a small subset of users before rolling out to production"
    ],
    "answer": [
      "Increase the load on your test and staging environments"
    ],
    "multiple": false
  },
];

questions.sort(() => Math.random() - 0.5);

// ─── State & DOM References ───────────────────────────────────────────────────
let currentQuestion   = 0;
let score             = 0;
let showingFeedback   = false;
let quizStartTime     = new Date();
let totalTimeSeconds  = 90 * 60;
let countdownInterval = null;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
const nextBtn    = document.getElementById("nextBtn");
const finishBtn  = document.getElementById("finishTestBtn");
const resultEl   = document.getElementById("result");
const timerEl    = document.getElementById("timer");

// ─── Utility Functions ───────────────────────────────────────────────────────
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function normalize(str) {
  return str
    .replace(/\\/g, "")     // remove all backslashes
    .replace(/\s+/g, " ")   // collapse whitespace/newlines into single spaces
    .trim();
}

function updateProgress() {
  const pct = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ─── Render Question ─────────────────────────────────────────────────────────
function loadQuestion() {
  showingFeedback    = false;
  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";

  const q         = questions[currentQuestion];
  const shuffled  = shuffleArray([...q.options]);
  const inputType = q.multiple ? "checkbox" : "radio";

  // break the question into lines, render any image-URL as an <img>
  const html = q.question
    .split('\n')
    .map(line => {
      const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
      if (m) {
        return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
      }
      // otherwise escape & wrap in a paragraph
      return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
    })
    .join('');
  questionEl.innerHTML = html;
  optionsEl.innerHTML    = "";

  shuffled.forEach(option => {
    const li    = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'option';
  
    const input = document.createElement('input');
    input.type  = inputType;
    input.name  = 'option';
    input.value = option;
  
    const span = document.createElement('span');
    if (option.match(/\.(jpe?g|png|gif|webp)$/i)) {
      const img = document.createElement('img');
      img.src    = option;
      img.alt    = 'Option image';
      img.style.maxWidth = '100%';
      img.style.height   = 'auto';
      span.appendChild(img);
    } else {
      span.textContent = option;
    }
  
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      label.classList.add('selected');
    });
  
    label.append(input, span);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });


  // wire up the “selected” highlight
  optionsEl.querySelectorAll(`input[name="option"]`).forEach(input => {
    input.addEventListener("change", () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      input.parentElement.classList.add("selected");
    });
  });

  updateProgress();
  finishBtn.style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}



// ─── Timer ────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const h = Math.floor(totalTimeSeconds / 3600);
  const m = Math.floor((totalTimeSeconds % 3600) / 60);
  const s = totalTimeSeconds % 60;

  let parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);

  timerEl.textContent = `Time Remaining: ${parts.join(" ")}`;
  totalTimeSeconds--;

  if (totalTimeSeconds < 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}

function startTimer() {
  updateTimerDisplay();
  countdownInterval = setInterval(updateTimerDisplay, 1000);
}

// ─── Submission & Feedback ───────────────────────────────────────────────────
nextBtn.addEventListener("click", () => {
  const currentQ       = questions[currentQuestion];
  const selectedInputs = Array.from(
    document.querySelectorAll("input[name='option']:checked")
  );

  if (!showingFeedback) {
    if (selectedInputs.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    // Normalize selected vs. correct
    const selectedNorm = selectedInputs.map(i => normalize(i.value));
    const correctNorm  = currentQ.answer.map(a => normalize(a));

    const isCorrect =
      selectedNorm.length === correctNorm.length &&
      correctNorm.every(ans => selectedNorm.includes(ans));

    const selectedRaw = selectedInputs.map(input => input.value); // preserve original formatting
      userAnswers[currentQuestion] = {
        selected: selectedRaw,
        correct: currentQ.answer,
        question: currentQ.question,
        explanation: currentQ.explanation
      };


    // Disable & highlight in one pass
    optionsEl.querySelectorAll("input[name='option']").forEach(input => {
      input.disabled = true;
      const valNorm = normalize(input.value);
      const lbl     = input.parentElement;

      if (correctNorm.includes(valNorm))       lbl.classList.add("correct");
      else if (input.checked)                  lbl.classList.add("incorrect");
    });

    // Show feedback message
    resultEl.innerHTML = isCorrect
      ? `<p style="color:green;">✅ Correct!</p>`
      : `<p style="color:red;">❌ Incorrect.</p>
         <p>Correct Answer:<br><strong>${currentQ.answer.join("<br>")}</strong></p>`;
    
    
    // ⬇️ Add this below the feedback
    if (currentQ.explanation) {
      resultEl.innerHTML += `<p class="explanation"><strong>Explanation:</strong> ${currentQ.explanation}</p>`;
    }

    
    if (isCorrect) score++;
    showingFeedback     = true;
    nextBtn.textContent = (currentQuestion < questions.length - 1)
      ? "Next Question"
      : "See Result";

  } else {
    // Move to next question or finish
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(" ");
}

function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const duration = formatDuration(Math.floor((endTime - quizStartTime) / 1000));

  const record = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  history.push(record);
  localStorage.setItem("quizScoreHistory", JSON.stringify(history));
}

function displayScoreHistory() {
  const container = document.querySelector(".container");
  const historyDiv = document.getElementById("scoreHistory");
  if (historyDiv) historyDiv.remove();

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  if (history.length === 0) return;

  const div = document.createElement("div");
  div.id = "scoreHistory";
  div.style.display = "none";
  div.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr><th>#</th><th>Score</th><th>Time Taken</th><th>Date</th></tr>
      </thead>
      <tbody>
        ${history.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${r.score} / ${r.total}</td>
            <td>${r.duration}</td>
            <td>${r.date}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    
    <div style="margin-top: 10px;">
      <button id="clearHistoryBtn">Clear History</button>
      <button id="restartFromHistoryBtn" style="margin-left: 10px;">Restart Quiz</button>
    </div>
    <hr>
  `;
  container.insertBefore(div, document.getElementById("quiz"));

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Clear all score history?")) {
      localStorage.removeItem("quizScoreHistory");
      displayScoreHistory();
    }
  });

  document.getElementById('restartFromHistoryBtn').addEventListener('click', () => {
    if (confirm("Do you want to restart the quiz?")) {
      // Reset quiz state
      score = 0;
      currentQuestion = 0;
      showingFeedback = false;
      quizStartTime = new Date();
  
      // Reset timer
      clearInterval(countdownInterval);
      totalTimeSeconds = 90 * 60; // reset to your default duration
      updateTimerDisplay();
      startTimer();

      // Hide score history section
      const historySection = document.getElementById("scoreHistory");
      if (historySection) historySection.style.display = "none";
  
      // Shuffle and reload quiz
      questions.sort(() => Math.random() - 0.5);
      document.getElementById("quiz").style.display = "block";
      document.getElementById("finalResult").style.display = "none";
      const summary = document.getElementById("summaryPage");
      if (summary) summary.style.display = "none";
  
      loadQuestion();
    }
  });

}


// Helper functions:

function renderAnswerHTML(answers) {
  return answers.map(ans => {
    if (ans.match(/\.(jpe?g|png|gif|webp)$/i)) {
      return `<img src="${ans}" alt="Answer image" style="max-width:100%;height:auto;margin:6px 0;">`;
    }
    return `<p>${ans}</p>`;
  }).join("");
}

function renderQuestionHTML(text) {
  return text.split('\n').map(line => {
    const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
    if (m) {
      return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
    }
    return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
  }).join('');
}


// ─── Show Result & Restart ───────────────────────────────────────────────────
function showResult() {
  clearInterval(countdownInterval);
  saveScoreToHistory(score, questions.length);

  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
  `;
  finishBtn.style.display = "none";

  displayScoreHistory();
  document.getElementById("scoreHistory").style.display = "block";

  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    clearInterval(countdownInterval);
    totalTimeSeconds = 90 * 60;
    startTimer();

    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });

  const summaryDiv = document.getElementById("summaryPage");
  summaryDiv.innerHTML = "<h3>Question Summary</h3>";

  userAnswers.forEach((entry, index) => {
    const isCorrect =
      entry.selected.length === entry.correct.length &&
      entry.correct.every(ans => entry.selected.includes(ans));

    const explanationHTML = entry.explanation
      ? `<p><strong>Explanation:</strong><br>${entry.explanation}</p>`
      : "";

    const questionHTML = `
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 12px;">
        <p><strong>Q${index + 1}:</strong></p>
        ${renderQuestionHTML(entry.question)}
        <p><strong>Your Answer:</strong><br>${renderAnswerHTML(entry.selected)}</p>
        <p><strong>Correct Answer:</strong><br>${renderAnswerHTML(entry.correct)}</p>
        <p>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
        ${explanationHTML}
      </div>
    `;

    summaryDiv.innerHTML += questionHTML;
  });

    
    // Hide quiz and show summary
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
    document.getElementById("scoreHistory").style.display = "block";
    summaryDiv.style.display = "block";

}


// ─── Bootstrap ───────────────────────────────────────────────────────────────

finishBtn.style.display = "none";
loadQuestion();
startTimer();
