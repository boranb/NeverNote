using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NeverNote.Api.Dtos
{
    public class UpdateNoteDto
    {
        public int Id { get; set; }
        [Display(Name = "Title")]
        [Required(ErrorMessage = "{0} is Required")]
        [StringLength(100, ErrorMessage = "{0} cannot be longer than {1} characters")]
        public string Title { get; set; }
        public string Content { get; set; }
    }
}