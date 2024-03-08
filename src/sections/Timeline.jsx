import {
    Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  } from "@material-tailwind/react";
  import {
    BellIcon,
    ArchiveBoxIcon,
    CurrencyDollarIcon,
  } from "@heroicons/react/24/solid";
   
  export function TechStackTimeLine() {
    return (
        <>

        <div className="flex justify-center pt-20" id="techstack">
    <div className="md:text-5xl text-4xl font-bold text-primary mb-5 leading-normal">
        Our Technology Stack
        
    </div>
</div>


<div className="flex justify-center  " >
        <Typography color="gary" variant="h5" className="font-normal text-gray-600">
        We use the best of techs, tools, and approaches to deliver highly scalable, secure solutions for your business.
            </Typography>
        </div>
     
<div className="flex justify-center space-y-5  ">
<div className="w-1/2 pb-20 pt-14">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="md" src="https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg" alt="user 1" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            WEB
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            .NET, Java, Python, Node.js. PHP, C++, Go, Scala
                HTML, CSS, JS, Angular, React, Vue.js
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="md" src="https://saigontechnology.com/assets/media/Blog/typical-process-for-a-successful-mobile-development.jpeg" alt="user 2" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              MOBILE
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            Swift, Kotlin, Flutter, Cordova, React Native

            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="md" src="https://www.analyticsinsight.net/wp-content/uploads/2022/01/Big-Data-Analyticsq.jpg" alt="user 2" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            BIG DATA AND ANALYTICS
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            Apache Hadoop, Apache Spark, Tableau, Qlik, Looker, Microsoft Power BI, comScore, Omni­ture, Nielsen, Conviva, YOUBORA, Sisense, Google

            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="md" src="https://www.nitorinfotech.com/wp-content/uploads/2021/12/4-Pillars-of-Cloud-Computing-1.jpg" alt="user 2" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              CLOUD
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            AWS, AWS CloudFormation, Google Cloud Platform, Cloudera, Snowflake Data Cloud, Pivotal Cloud Foundrye

            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="md" src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282569/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png" alt="user 2" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              DATABASE
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
            MySQL, PostgreSQL, MSSQL Server, MongoDB, Firebase

            </Typography>
          </TimelineBody>
        </TimelineItem>
  
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="md" src="https://nordicapis.com/wp-content/uploads/The-Role-of-APIs-in-DevOps-1024x576.png" alt="user 3" withBorder />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
            DEVOPS 

            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
            Amazon Web Services, Microsoft Azure, Rackspace, OpenStack, Ansible, Terraform, Puppet, SaltStack, Chef, Kubernetes, Docker Swarm, Apache Mesos, Atlas, Jenkins, GitLab, Gradle, Bamboo, Apache Maven, Microsoft Visual Studio, Travis CI, Apache JMeter, SonarQube, ReSharper, QASymphony, Cucumber, RSpec, Selenium, Capybara, Coverity, SauceLabs, TestRail
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
</div>
    
      </>
    );
  }