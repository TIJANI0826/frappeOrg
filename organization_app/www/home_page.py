from __future__ import unicode_literals
import frappe

@frappe.whitelist(allow_guest=True)
def get_content(context):
	context['custom_content'] = 'Welcome to Organisation App'