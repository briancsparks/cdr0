# cdr0
Monorepo for cdr0 org

This repository contains the helper code to run the cdr0 data-center.

* terraform-json - A NodeJs helper package to build JSON that Terraform likes.
* summon - A small JSON REST server that runs on each instance, and allows it
  to retrieve various information and files that it needs.

## Summon

In the same way that the AWS infrastructure provices _instance data_ at 169.254.169.254,
`summon` provides various information, and files.

* /s3/get/bucket/k/e/y/filename - Gets the file from S3.
  * Does not require that the AWS tools are installed on the instance to access S3.

## Terraform-json

A package that lets you use JavaScript to build your Terraform definitions, and generates
the JSON that would be equivalent to the HCL that you want. (Probably should have been
called JSON-HCL or something.)

